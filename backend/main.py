import os
import sqlite3
from datetime import datetime
from typing import List

from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

DB_PATH = os.path.join(os.path.dirname(__file__), "quiz_results.db")

class QuizResultCreate(BaseModel):
    nickname: str
    score: int
    correct_count: int
    total_questions: int
    category: str
    difficulty: str

class QuizResult(QuizResultCreate):
    id: int
    created_at: str

class CategoryStats(BaseModel):
    category: str
    attempts: int
    average_score: float
    total_correct: int
    total_questions: int
    accuracy: float

class QuizStats(BaseModel):
    nickname: str
    total_attempts: int
    average_score: float
    best_score: int
    total_correct: int
    total_questions: int
    overall_accuracy: float
    category_stats: List[CategoryStats]

app = FastAPI(title="GitHub Project Backend", version="0.1.0")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS quiz_results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nickname TEXT NOT NULL,
                score INTEGER NOT NULL,
                correct_count INTEGER NOT NULL,
                total_questions INTEGER NOT NULL,
                category TEXT NOT NULL,
                difficulty TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )


def row_to_quiz_result(row: sqlite3.Row) -> QuizResult:
    return QuizResult(
        id=row["id"],
        nickname=row["nickname"],
        score=row["score"],
        correct_count=row["correct_count"],
        total_questions=row["total_questions"],
        category=row["category"],
        difficulty=row["difficulty"],
        created_at=row["created_at"],
    )


@app.on_event("startup")
async def startup_event():
    init_db()


@app.get("/api/ping")
async def ping():
    return {"message": "pong"}


@app.post("/api/quiz-results", response_model=QuizResult)
async def create_quiz_result(payload: QuizResultCreate):
    created_at = datetime.utcnow().isoformat()
    with get_db_connection() as conn:
        cursor = conn.execute(
            "INSERT INTO quiz_results (nickname, score, correct_count, total_questions, category, difficulty, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                payload.nickname,
                payload.score,
                payload.correct_count,
                payload.total_questions,
                payload.category,
                payload.difficulty,
                created_at,
            ),
        )
        conn.commit()
        last_id = cursor.lastrowid
        row = conn.execute(
            "SELECT * FROM quiz_results WHERE id = ?",
            (last_id,),
        ).fetchone()

    return row_to_quiz_result(row)


@app.get("/api/quiz-stats", response_model=QuizStats)
async def get_quiz_stats(nickname: str):
    with get_db_connection() as conn:
        rows = conn.execute(
            "SELECT * FROM quiz_results WHERE nickname = ? ORDER BY created_at DESC",
            (nickname,),
        ).fetchall()

    if not rows:
        return QuizStats(
            nickname=nickname,
            total_attempts=0,
            average_score=0.0,
            best_score=0,
            total_correct=0,
            total_questions=0,
            overall_accuracy=0.0,
            category_stats=[],
        )

    total_attempts = len(rows)
    total_score = sum(row["score"] for row in rows)
    best_score = max(row["score"] for row in rows)
    total_correct = sum(row["correct_count"] for row in rows)
    total_questions = sum(row["total_questions"] for row in rows)
    overall_accuracy = round((total_correct / total_questions) * 100, 2) if total_questions else 0.0

    category_map = {}
    for row in rows:
        category = row["category"]
        if category not in category_map:
            category_map[category] = {
                "attempts": 0,
                "total_score": 0,
                "total_correct": 0,
                "total_questions": 0,
            }

        category_map[category]["attempts"] += 1
        category_map[category]["total_score"] += row["score"]
        category_map[category]["total_correct"] += row["correct_count"]
        category_map[category]["total_questions"] += row["total_questions"]

    category_stats = []
    for category, data in category_map.items():
        attempts = data["attempts"]
        total_correct_cat = data["total_correct"]
        total_questions_cat = data["total_questions"]
        category_stats.append(CategoryStats(
            category=category,
            attempts=attempts,
            average_score=round(data["total_score"] / attempts, 2) if attempts else 0.0,
            total_correct=total_correct_cat,
            total_questions=total_questions_cat,
            accuracy=round((total_correct_cat / total_questions_cat) * 100, 2) if total_questions_cat else 0.0,
        ))

    return QuizStats(
        nickname=nickname,
        total_attempts=total_attempts,
        average_score=round(total_score / total_attempts, 2),
        best_score=best_score,
        total_correct=total_correct,
        total_questions=total_questions,
        overall_accuracy=overall_accuracy,
        category_stats=category_stats,
    )


@app.get("/api/quiz-results", response_model=List[QuizResult])
async def list_quiz_results(nickname: Optional[str] = None):
    with get_db_connection() as conn:
        if nickname:
            rows = conn.execute(
                "SELECT * FROM quiz_results WHERE nickname = ? ORDER BY created_at DESC",
                (nickname,),
            ).fetchall()
        else:
            rows = conn.execute(
                "SELECT * FROM quiz_results ORDER BY created_at DESC"
            ).fetchall()

    return [row_to_quiz_result(row) for row in rows]


@app.delete("/api/quiz-results/{result_id}")
async def delete_quiz_result(result_id: int):
    enabled = os.getenv("ENABLE_DELETE", "false").lower() == "true"
    if not enabled:
        raise HTTPException(status_code=403, detail="Delete functionality is disabled.")

    with get_db_connection() as conn:
        row = conn.execute(
            "SELECT * FROM quiz_results WHERE id = ?",
            (result_id,),
        ).fetchone()

        if not row:
            raise HTTPException(status_code=404, detail="Quiz result not found.")

        conn.execute(
            "DELETE FROM quiz_results WHERE id = ?",
            (result_id,),
        )
        conn.commit()

    return {"id": result_id, "message": "Quiz result deleted successfully."}

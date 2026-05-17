import os
import sqlite3
from datetime import datetime
from typing import List

from typing import Optional

from fastapi import FastAPI
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

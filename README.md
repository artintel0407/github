# Data Structure Learning Platform

자료구조를 이론, 시각화, 퀴즈, 코드 실행 흐름으로 함께 학습할 수 있는 웹 기반 학습 플랫폼입니다.  
Array, Linked List, Stack, Queue, Tree의 핵심 개념과 연산 과정을 빠르게 복습하고 직접 확인할 수 있도록 구성했습니다.

---

## 🌐 Demo

👉 [Live Demo 바로가기](https://artintel0407.github.io/github/)

---

## 🚀 주요 기능

- **Visualizer**  
  Array, Linked List, Stack, Queue, Tree를 선택해 주요 연산 결과를 시각적으로 확인

- **Quiz**  
  난이도 및 카테고리 기반 문제 풀이  
  정답/오답 피드백, 해설, 결과 차트 제공

- **Quiz Records**  
  FastAPI 백엔드와 연동한 기록 저장 및 닉네임별 조회/통계 기능
  (프로덕션: PostgreSQL via `DATABASE_URL` on Render, 로컬 개발: SQLite fallback)

- **Theory**  
  시험 전 복습용 핵심 개념 정리

- **Code Visualizer**  
  ADT 명령을 입력하여 자료구조 상태 변화를 단계별로 확인

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages
- FastAPI
- SQLite
- Render
 - PostgreSQL (production)

---

## � Screenshots

| Home | Visualizer | Quiz |
|------|------------|------|
| ![Home Overview](images/home-overview.png) | ![Visualizer Queue State](images/visualizer-queue-state.png) | ![Quiz Feedback](images/quiz-feedback.png) |

---

## �📚 주요 자료구조

- Array
- Linked List
- Stack
- Queue
- Tree

---

## 📁 프로젝트 구조

```text
.
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── docs/
│   ├── index.html
│   ├── theory.html
│   ├── stl.html
│   ├── visualizer.html
│   ├── adt-visualizer.html
│   ├── quiz.html
│   ├── common.css
│   ├── visualizer.css/js
│   ├── adt-visualizer.css/js
│   ├── quiz.css/js
│   ├── stl.css/js
│   ├── legacy/
│   └── legacy-assets/
└── images/
```

- `backend/`: FastAPI 기반 퀴즈 기록 저장 및 조회 API
- `docs/`: 프론트엔드 HTML/CSS/JavaScript 자원
- `images/`: 데모 스크린샷 및 에셋

---

## 📡 Backend API

- `POST /api/quiz-results` : 퀴즈 결과 저장
- `GET /api/quiz-results` : 전체 기록 조회
- `GET /api/quiz-results?nickname=닉네임` : 닉네임별 기록 조회
- `GET /api/quiz-stats?nickname=닉네임` : 닉네임별 통계 조회
- `DELETE /api/quiz-results/{result_id}` : 삭제(관리자/개발용, `ENABLE_DELETE=true` 설정 시만 허용)

배포 구조
- Frontend: GitHub Pages — https://artintel0407.github.io/github/
- Backend: Render — https://github-ujp6.onrender.com (API 문서: https://github-ujp6.onrender.com/docs)
- Database: Render PostgreSQL (프로덕션에서는 `DATABASE_URL` 환경변수로 연결)

설명 요약: 백엔드는 로컬 개발 시 `backend/quiz_results.db`(SQLite)를 기본 사용하며, 배포 환경(Render)에서는 `DATABASE_URL`이 설정되면 PostgreSQL을 사용합니다. PostgreSQL 도입 이유는 Render의 파일 시스템 특성상 SQLite 파일이 초기화되는 문제를 방지하기 위함입니다.

---

## ⚙️ 로컬 백엔드 실행 방법

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

- 로컬 실행 시 백엔드는 `http://127.0.0.1:8000`에서 실행됩니다.
- 배포된 백엔드는 `https://github-ujp6.onrender.com`입니다.
- 배포된 API 문서는 `https://github-ujp6.onrender.com/docs`에서 확인하세요.
- GitHub Pages에서는 프론트엔드만 배포되며, 백엔드 기능을 사용하려면 로컬 서버를 별도 실행하거나 배포된 백엔드를 이용해야 합니다.

DATABASE_URL 사용(선택)

- 로컬에서 PostgreSQL 인스턴스로 테스트하려면 환경변수 `DATABASE_URL`을 설정하고 서버를 시작하세요.

Windows PowerShell 예시:
```powershell
$env:DATABASE_URL = "postgres://user:password@host:port/dbname"
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

로컬에서 `DATABASE_URL`을 설정하지 않으면 애플리케이션은 기존대로 `backend/quiz_results.db` SQLite 파일을 사용합니다.

## 🔒 삭제 API 안내

`DELETE /api/quiz-results/{result_id}`는 관리자/개발용 기능입니다. 기본적으로 비활성화되어 있으며, 사용하려면 환경변수 `ENABLE_DELETE=true`를 설정해야 합니다. (프로덕션 배포에서는 기본적으로 설정하지 않습니다.)

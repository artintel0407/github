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
  FastAPI + SQLite 기반 백엔드와 연동한 기록 저장 및 닉네임별 조회/통계 기능

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

- 프론트엔드 배포: GitHub Pages
- 백엔드 배포: Render
- 배포된 백엔드 URL: https://github-ujp6.onrender.com
- 배포된 API 문서: https://github-ujp6.onrender.com/docs

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

## 🔒 삭제 API 안내

`DELETE /api/quiz-results/{result_id}` 엔드포인트는 관리자/개발용 기능으로, 기본 설정에서는 비활성화되어 있습니다.
로컬에서 사용하려면 `ENABLE_DELETE=true` 환경변수를 설정해야 하며, Render 배포 환경에서는 기본적으로 설정되지 않아 삭제가 차단됩니다.

# Data Structure Learning Platform

자료구조의 기본 개념을 학습하고, 시각화와 퀴즈를 통해 이해도를 확인할 수 있는 웹 기반 학습 프로젝트입니다.

프론트엔드는 정적 HTML/CSS/JavaScript로 구성되어 GitHub Pages에 배포되어 있으며, 퀴즈 결과 저장과 기록 조회 기능은 FastAPI 백엔드와 PostgreSQL 데이터베이스를 통해 동작합니다.

---

## 배포 주소

- Frontend: https://artintel0407.github.io/github/
- Backend: https://github-ujp6.onrender.com
- API Docs: https://github-ujp6.onrender.com/docs

---

## 주요 기능

### Basic Theory

- Array, Linked List, Stack, Queue, Tree 등 주요 자료구조의 기본 개념 정리
- 자료구조별 핵심 특징과 사용 목적을 학습할 수 있는 이론 페이지 제공

### STL

- 자료구조별 설명과 시각화 페이지로 이동할 수 있는 학습 허브
- Stack, Queue, Array, Linked List, Tree 관련 학습 흐름 제공

### Visualizer

- 자료구조의 상태 변화를 화면에서 확인할 수 있는 통합 시각화 페이지
- Array, Linked List, Stack, Queue, Tree의 기본 동작을 시각적으로 확인

### Code Visualizer

- ADT 명령어를 입력해 자료구조의 상태 변화를 단계별로 확인
- 명령 기반 학습을 통해 연산 흐름을 직접 실험 가능

### Quiz

- 자료구조 관련 퀴즈 풀이 기능
- 정답 여부, 해설, 점수 결과 제공
- Chart.js 기반 결과 차트 표시

### Quiz Records

- 닉네임 기반 퀴즈 결과 저장
- 닉네임으로 이전 기록 조회
- 전체 점수, 최고 점수, 정답률, 카테고리별 통계 확인
- FastAPI 백엔드와 PostgreSQL 데이터베이스를 통한 기록 관리

---

## 사용 기술

### Frontend

- HTML
- CSS
- JavaScript
- Chart.js
- GitHub Pages

### Backend

- Python
- FastAPI
- Uvicorn
- PostgreSQL
- SQLite 로컬 개발 fallback
- Render

---

## 프로젝트 구조

```text
.
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── runtime.txt
├── docs/
│   ├── index.html
│   ├── theory.html
│   ├── stl.html
│   ├── visualizer.html
│   ├── adt-visualizer.html
│   ├── quiz.html
│   ├── common.css
│   ├── visualizer.css
│   ├── visualizer.js
│   ├── adt-visualizer.css
│   ├── adt-visualizer.js
│   ├── quiz.css
│   ├── quiz.js
│   ├── stl.css
│   ├── stl.js
│   ├── legacy/
│   └── legacy-assets/
├── images/
│   ├── home-overview.png
│   ├── quiz-feedback.png
│   └── visualizer-queue-state.png
├── .gitignore
└── README.md
```

- `backend/`: FastAPI 기반 퀴즈 결과 저장, 조회, 통계 API
- `docs/`: GitHub Pages로 배포되는 프론트엔드 정적 파일
- `docs/legacy/`, `docs/legacy-assets/`: 기존 개별 자료구조 시각화 관련 파일
- `images/`: README 및 발표 자료에 사용할 스크린샷

---

## 실행 방법

### Frontend

프론트엔드는 정적 파일로 구성되어 있어 별도 빌드 과정 없이 실행할 수 있습니다.

- 배포 페이지: https://artintel0407.github.io/github/
- 로컬 확인: `docs/index.html` 파일을 브라우저에서 열기

### Backend

백엔드는 `backend` 폴더를 작업 디렉터리로 둔 상태에서 실행합니다.

```powershell
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

실행 후 확인 주소:

- Local API: http://127.0.0.1:8000
- Local API Docs: http://127.0.0.1:8000/docs
- Health Check: http://127.0.0.1:8000/api/ping

로컬 개발 환경에서는 별도 PostgreSQL 연결 설정이 없으면 SQLite 파일을 fallback으로 사용합니다. 배포 환경에서는 Render의 환경 변수로 PostgreSQL 연결 정보를 관리합니다.

---

## API 요약

| Method | Endpoint | 설명 |
| --- | --- | --- |
| `GET` | `/api/ping` | 백엔드 상태 확인 |
| `POST` | `/api/quiz-results` | 퀴즈 결과 저장 |
| `GET` | `/api/quiz-results` | 전체 퀴즈 결과 조회 |
| `GET` | `/api/quiz-results?nickname={nickname}` | 닉네임별 퀴즈 결과 조회 |
| `GET` | `/api/quiz-stats?nickname={nickname}` | 닉네임별 전체 및 카테고리별 통계 조회 |
| `DELETE` | `/api/quiz-results/{result_id}` | 퀴즈 결과 삭제. 개발/관리 목적이며 기본적으로 비활성화 |

자세한 요청/응답 형식은 FastAPI 문서에서 확인할 수 있습니다.

- https://github-ujp6.onrender.com/docs

---

## Screenshots

| Home | Visualizer | Quiz |
| --- | --- | --- |
| ![Home Overview](images/home-overview.png) | ![Visualizer Queue State](images/visualizer-queue-state.png) | ![Quiz Feedback](images/quiz-feedback.png) |

---

## 안정화 작업 내용

제출 전 마무리 단계에서 다음 항목을 중심으로 정리했습니다.

- 프론트엔드 배포 경로를 GitHub Pages 기준으로 정리
- 백엔드 배포 경로와 API 문서 주소 명시
- 퀴즈 결과 저장, 닉네임 기반 조회, 카테고리별 통계 기능을 현재 구현 기준으로 문서화
- PostgreSQL 기반 배포 환경과 SQLite 로컬 fallback 구조 설명
- 실제 구현되지 않은 기능은 주요 기능에서 제외하고 향후 개선 방향으로 분리
- 깨진 문자와 오래된 설명을 정리해 제출/발표용 README 형식으로 개선

---

## 향후 개선 방향

현재 구현을 안정화한 뒤, 추가로 개선할 수 있는 항목입니다.

- Stack/Queue 시각화 고도화
- 전체 Visualizer UI 리디자인
- Q&A 게시판
- 로그인 기능
- Binary Tree / Complete Binary Tree 추가
- 퀴즈 문제 수 확장
- 그래프 기반 학습 통계

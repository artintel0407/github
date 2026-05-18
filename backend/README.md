# Backend

이 폴더에는 FastAPI 기반 백엔드의 최소 구조가 포함되어 있습니다.

## 실행 방법

1. Python 가상환경 생성

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
```

2. 의존성 설치

```powershell
pip install -r requirements.txt
```

3. 서버 실행

```powershell
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### PostgreSQL 환경에서 실행

Render와 같은 배포 환경에서는 `DATABASE_URL` 환경변수가 설정되면 PostgreSQL을 사용합니다.
로컬에서는 `DATABASE_URL`이 없으면 기존처럼 `backend/quiz_results.db` SQLite 파일을 사용합니다.

```powershell
$env:DATABASE_URL = "postgres://user:password@host:port/dbname"
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

테이블이 없으면 서버 시작 시 `quiz_results` 테이블이 자동으로 생성됩니다.

4. 서버 확인

브라우저 또는 curl로 다음 엔드포인트를 확인합니다.

```powershell
curl http://127.0.0.1:8000/api/ping
```

정상 동작 시 다음과 같은 응답이 나옵니다.

```json
{"message": "pong"}
```

5. 퀴즈 결과 저장 및 조회 테스트

`backend/quiz_results.db` 파일은 서버 시작 시 자동으로 생성됩니다.

- 저장 테스트

```powershell
curl -X POST http://127.0.0.1:8000/api/quiz-results -H "Content-Type: application/json" -d "{
  \"nickname\": \"tester\",
  \"score\": 85,
  \"correct_count\": 17,
  \"total_questions\": 20,
  \"category\": \"sample\",
  \"difficulty\": \"medium\"
}"
```

- 조회 테스트

```powershell
curl http://127.0.0.1:8000/api/quiz-results
```

- nickname으로 필터링 조회

```powershell
curl "http://127.0.0.1:8000/api/quiz-results?nickname=tester"
```

- 닉네임별 통계 조회

```powershell
curl "http://127.0.0.1:8000/api/quiz-stats?nickname=tester"
```

- 삭제 기능 (개발/관리용)

기본 상태에서는 비활성화되어 있으며, `ENABLE_DELETE=true` 환경변수를 설정한 경우에만 사용할 수 있습니다.

```powershell
# Windows PowerShell
$env:ENABLE_DELETE = "true"
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# macOS / Linux
export ENABLE_DELETE=true
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

삭제 테스트 예시:

```powershell
curl -X DELETE http://127.0.0.1:8000/api/quiz-results/1
```

Render 배포 환경에서는 기본적으로 `ENABLE_DELETE`를 설정하지 않으므로 삭제 기능이 차단됩니다.

## API 문서

Swagger UI에서 API를 테스트할 수 있습니다.

```
http://127.0.0.1:8000/docs
```

## Render 배포 테스트

1. Render 서비스의 환경 변수에 `DATABASE_URL`을 추가합니다.
2. 배포를 실행하면 `DATABASE_URL`이 감지되어 PostgreSQL을 사용합니다.
3. `GET /api/ping`, `POST /api/quiz-results`, `GET /api/quiz-results`, `GET /api/quiz-results?nickname=...`, `GET /api/quiz-stats?nickname=...`, `DELETE /api/quiz-results/{result_id}`가 기존대로 동작하는지 확인합니다.

Render에서 삭제 기능을 테스트하려면 `ENABLE_DELETE=true` 환경변수를 추가해야 합니다.
```

Swagger UI에서 GET /api/quiz-results 엔드포인트를 펼치면 nickname 쿼리 파라미터 입력칸이 표시됩니다.

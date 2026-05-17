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

## API 문서

Swagger UI에서 API를 테스트할 수 있습니다.

```
http://127.0.0.1:8000/docs
```

Swagger UI에서 GET /api/quiz-results 엔드포인트를 펼치면 nickname 쿼리 파라미터 입력칸이 표시됩니다.

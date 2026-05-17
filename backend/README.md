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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from executor import compile_code

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExecuteRequest(BaseModel):
    code: str

@app.post("/execute")
def execute(req: ExecuteRequest):
    try:
        bin_path = compile_code(req.code)
        return { "ok": True, "message": "컴파일 성공", "bin": bin_path }
    except Exception as e:
        return { "ok": False, "error": str(e) }

@app.get("/health")
def health():
    return { "status": "ok" }

import subprocess
import uuid
import os

SANDBOX_DIR = "/tmp/sandbox"

def compile_code(cpp_code: str) -> str:
    session_id = str(uuid.uuid4())[:8]
    src_path = f"{SANDBOX_DIR}/{session_id}.cpp"
    bin_path = f"{SANDBOX_DIR}/{session_id}.out"

    with open(src_path, "w") as f:
        f.write(cpp_code)

    result = subprocess.run(
        ["g++", "-g", "-O0", src_path, "-o", bin_path],
        capture_output=True,
        text=True,
        timeout=10
    )

    if result.returncode != 0:
        raise Exception(f"컴파일 오류:\n{result.stderr}")

    return bin_path

from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
import uuid

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/test")
async def get_result():
    results = {"result" :"I'm good."}
    return results


# @app.get("/result")
# async def get_result():
#     results = FileResponse("./static/result.png")
#     return results

@app.post("/upload_image/")
async def upload_file(file: UploadFile):
    UPLOAD_DIR = "./images"
    content = await file.read()
    image_uuid = str(uuid.uuid4())
    filename = f"{image_uuid}.jpg"  # uuid로 유니크한 파일명으로 변경
    with open(os.path.join(UPLOAD_DIR, filename), "wb") as fp:
        fp.write(content)  # 서버 로컬 스토리지에 이미지 저장 (쓰기)

    # ML 처리

    results = FileResponse("./static/result.png")
    return results
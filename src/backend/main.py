from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai import *

app = FastAPI()

# Configuração CORS
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "It's working!"}

@app.post("/pdf-file")
async def create_pdf_file(file: UploadFile):
    return await analysePDF(file)

@app.post("/txt-file")
async def create_txt_file(file: UploadFile):
    return await analyseTXT(file)

@app.post("/email")
async def create_email(email: Email):
    return analyseEmail(email)

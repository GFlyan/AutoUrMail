from fastapi import FastAPI
from ai import *
app = FastAPI()
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

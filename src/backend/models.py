from pydantic import BaseModel

class Email(BaseModel):
    sender: str
    subject: str
    message: str

class Analysis(BaseModel):
    status: bool
    message: str
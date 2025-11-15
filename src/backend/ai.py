from models import *
from google import genai
from fastapi import UploadFile
from PyPDF2 import PdfReader
import os
from io import BytesIO

api_key = os.getenv("GENAI_API_KEY")
client = genai.Client(api_key=api_key)

def analyseStatusEmail(email: Email):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
            Dado o seguinte email:
            Remetente: {email.sender}
            Assunto: {email.subject} 
            Conteúdo do Email: {email.message}
            Classificar o email em uma das seguintes categorias: 
                *Produtivo: retorne somente a palavra "true" como resposta e nada mais;
                *Improdutivo: retorne somente a palavra "false" como resposta e nada mais.
            Os critérios de classificação são os seguintes:
            
            *Produtivo: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
            *Improdutivo: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos).
        """,
    )
    if response.candidates[0].content.parts[0].text.lower() == "true":
        status = True
    else:
        status = False
    return status

def generateMessageEmail(status: bool,email: Email):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
            Com base no seguinte prompt
            "Dado o seguinte email:
            Remetente: {email.sender}
            Assunto: {email.subject} 
            Conteúdo do Email: {email.message}
            Classificar o email em uma das seguintes categorias: 
                *Produtivo: retorne somente a palavra "true" como resposta e nada mais;
                *Improdutivo: retorne somente a palavra "false" como resposta e nada mais.
            Os critérios de classificação são os seguintes:
            
            *Produtivo: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
            *Improdutivo: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos)."
            
            O email foi caracterizado como {status}, agora preciso que gere uma resposta levando em consideração a classificação realizada e também o contexto do email. 
            Deve ser retornado apenas a mensagem/resposta sem etapa de thinking ou explicação do porquê da analise realizada.
            Por fim no final da mensagem deve ser finalizada com "Atenciosamente, AutoUrMail."
            """,
    )
    return response.candidates[0].content.parts[0].text


def analyseEmail(email: Email):
    status = analyseStatusEmail(email)
    message = generateMessageEmail(status, email)
    analysis = Analysis(status=status, message=message)
    return analysis

#Testar p baixo

def analyseStatusFile(content: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
            Dado o seguinte email:
            {content}
            Classificar o email em uma das seguintes categorias: 
                *Produtivo: retorne somente a palavra "true" como resposta e nada mais;
                *Improdutivo: retorne somente a palavra "false" como resposta e nada mais.
            Os critérios de classificação são os seguintes:
            
            *Produtivo: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
            *Improdutivo: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos).
        """,
    )
    if response.candidates[0].content.parts[0].text.lower() == "true":
        status = True
    else:
        status = False
    return status

def generateMessageFile(status: bool,content: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""Com base no seguinte prompt
            "Dado o seguinte email:
            {content}
            Classificar o email em uma das seguintes categorias: 
                *Produtivo: retorne somente a palavra "true" como resposta e nada mais;
                *Improdutivo: retorne somente a palavra "false" como resposta e nada mais.
            Os critérios de classificação são os seguintes:
            
            *Produtivo: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
            *Improdutivo: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos)."
            
            O email foi caracterizado como {status}, agora preciso que gere uma resposta levando em consideração a classificação realizada e também o contexto do email. 
            Deve ser retornado apenas a mensagem/resposta sem etapa de thinking ou explicação do porquê da analise realizada.
            Por fim no final da mensagem deve ser finalizada com "Atenciosamente, AutoUrMail."""
    )
    return response.candidates[0].content.parts[0].text

async def analysePDF(file: UploadFile):
    pdf_bytes = await file.read()
    content_bytes = PdfReader(BytesIO(pdf_bytes))
    content = ""

    for page in content_bytes.pages:
        text = page.extract_text()
        if text:
            content += text

    status = analyseStatusFile(content)
    message = generateMessageFile(status, content)
    analysis = Analysis(status=status, message=message)
    return analysis

async def analyseTXT(file: UploadFile):
    content = (await file.read()).decode("utf-8")
    status = analyseStatusFile(content)
    message = generateMessageFile(status, content)
    analysis = Analysis(status=status, message=message)
    return analysis

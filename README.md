# AutoUrMail

## 🚀 Visão Geral

O **AutoUrMail** é uma aplicação web desenvolvida para **automatizar a leitura, classificação e sugestão de respostas para emails**, liberando tempo da equipe que antes precisava processar manualmente grandes volumes de mensagens.  

O sistema **analisa o conteúdo do email**, determina se ele é **Produtivo** ou **Improdutivo** e sugere respostas automáticas baseadas nessa classificação.

O projeto foi desenvolvido como parte de um desafio de **solução digital para o setor financeiro**, que lida com alto volume de emails diariamente.

---

## 🎯 Objetivos do Projeto

1. **Classificação de Emails:**  
   Categorizar automaticamente emails em **Produtivo** ou **Improdutivo**.

2. **Sugestão de Respostas:**  
   Gerar respostas automáticas relevantes de acordo com a classificação do email.

3. **Facilidade de Uso:**  
   Permitir que o usuário **envie emails via upload de arquivo (.txt, .pdf)** ou **inserção direta de texto**.

4. **Visualização Intuitiva:**  
   Exibir claramente a **categoria do email** e a **resposta sugerida** em uma interface simples e amigável.

---

## 📝 Funcionalidades

- Upload de emails em **.txt** ou **.pdf**.  
- Inserção direta de **texto do email**.  
- Classificação automática de emails em **Produtivo** ou **Improdutivo**.  
- Sugestão de **resposta automática** baseada na classificação.  
- Confirmação de envio de email/documento para processamento com validação de campos obrigatórios (remetente e destinatário).  
- Diferenciação visual entre emails produtivos e improdutivos (cores definidas).  

---
## 📄 Formato Adequado para Arquivos `.txt` e `.pdf`

Para que o sistema consiga processar corretamente os emails enviados via upload, os arquivos devem seguir o **formato padronizado abaixo**:

* remetente: nome do remetente
* assunto: assunto do email
* email: conteúdo completo do email



### Exemplo:

* remetente: GFlyan
* assunto: Solicitação de atualização do projeto X
* email: Olá, gostaria de saber o status atual do projeto X. Preciso da atualização até amanhã para repassar à diretoria.


### Observações:

- O **remetente** é obrigatório, pois é necessário para identificar a origem do email.  
- O **assunto** ajuda na classificação inicial e no contexto da resposta automática.  
- O **email** deve conter o texto completo da mensagem, incluindo todas as informações relevantes que precisam ser analisadas.  
- Certifique-se de que cada campo esteja **precedido pelo nome do campo seguido de dois pontos (`:`)** como mostrado no exemplo.  
- Arquivos que não seguirem este formato podem gerar **erros na classificação ou na geração da resposta automática**.


---

## 💻 Tecnologias Utilizadas

- **Frontend:** Next.js (React)  
- **Backend:** Python com FastAPI  
- **Inteligência Artificial:** API Gemini (para processamento de texto, classificação de emails e geração de respostas automáticas)  
- **Hospedagem:** Frontend na Vercel, Backend no Render  

---

## 🔧 Como Funciona

1. O usuário envia o email via **upload ou inserção de texto**.  
2. O backend processa o conteúdo
3. A **API de AI** analisa o contexto do email e o classifica como **Produtivo** ou **Improdutivo**.  
4. A API sugere uma **resposta automática** adequada.  
5. A interface exibe a **categoria** e a **resposta sugerida** para o usuário revisar.  

---

## 🖼️ Protótipos

O design do projeto foi criado no Figma, seguindo uma interface limpa, funcional e responsiva para mobile e desktop:  

[Figma – AutoUrMail](https://www.figma.com/design/FzBwLCmm6vTEBvuuf964jO/AutoUrMail?node-id=0-1&p=f&m=draw)  

---

## ⚙️ Estrutura do Projeto

    AutoUrMail/ Repositório
        ├─ src/ Código fonte
        |   ├─ frontend/ Aplicação Next.js
        |   └─backend/ FastAPI
        └─ docs/ Documentação


---

## 🛠️ Como Rodar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/GFlyan/AutoUrMail
cd AutoUrMail
```


2. **Instale dependências do backend:**

```bash
cd backend
pip install -r requirements.txt
```


3. **Execute o backend:**

```bash
uvicorn main:app --reload
```

4. **GENAI_API_KEY**

```bash
É necessário criar na raiz do backend um arquivo .env contendo a sua chave de API do Gemini obtido no Google AI Studio.
```

5. **Execute o frontend:**

```bash
cd frontend
npm install
npm run dev
```

6. **Acesse a aplicação:**

```bash
Abra o navegador em http://localhost:3000
```

## 🌐 Deploy

O sistema está hospedado na nuvem para acesso online:

Frontend (Next.js) – Vercel: https://auto-ur-mail.vercel.app/

Backend (FastAPI) – Render: https://autourmail.onrender.com

## 📹 Demonstração em Vídeo

Veja uma demonstração da aplicação em funcionamento:
[Link do vídeo no YouTube](https://youtu.be/t3jaDrcG3S0)

✅ Critérios Atendidos

* Classificação automática de emails em Produtivo/Improdutivo

* Sugestão de resposta automática relevante

* Upload de arquivos .txt e .pdf ou inserção de texto

* Visualização clara das categorias e respostas

* Frontend em Next.js integrado ao backend Python/FastAPI

* Integração com API Gemini para AI

* Hospedagem funcional em nuvem

* Interface simples, intuitiva e responsiva

## 💡 Considerações Finais

O AutoUrMail foi desenvolvido para aumentar a produtividade das equipes, automatizando tarefas repetitivas de leitura e resposta de emails.
O projeto serve como um exemplo prático de aplicação de AI em um contexto corporativo real.

Divirta-se testando e explorando a solução! 🚀
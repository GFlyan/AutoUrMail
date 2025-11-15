# Oportunidade Identificada

**Automatizar a leitura e classificação de emails** e sugerindo classificações e respostas automáticas de acordo com o teor de cada email recebido, **liberando o tempo da equipe** que analisa os emails para que não seja mais necessário ter uma pessoa fazendo esse trabalho manualmente.

# Requisitos Funcionais

**Classificar emails em categorias predefinidas**

Como leitor eu gostaria que o sistema classificasse de forma automatizada os emails em categorias predefinidas para que eu pudesse poupar tempo e esforço com emails improdutivos.

- Utilizar técnicas de NLP para pré-processar o texto do email.
- Um email deve ser caracterizado como produtivo quando: Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
- Um email deve ser caracterizado como improdutivo quando: Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos).
- É necessário utilizar IA para analisar o email.

**Sugerir respostas automáticas baseadas na classificação relizada.**

Como leitor eu gostaria dispor de uma resposta automática à um email já classificado a fim de que eu possa poupar tempo e esforço redigindo.

- É necessário que a IA para redija a resposta.

**Permitir o upload de arquivos de email em formatos .txt ou .pdf.**

Como leitor eu gostaria de fornecer arquivos em formato .txt ou .pdf contendo os emails para que o sistema os classifique automaticamente. 

- O sistema deve ser capaz de receber e armazenar o email.

**Permitir a inserção direta de texto de emails.**

Como leitor eu gostaria de inserir diretamento o texto contido no email para que o sistema o classifique automaticamente. 

- O sistema deve ser capaz de receber e armazenar o email

**Confirmação de envio de documento/email para processamento.**

Como leitor eu gostaria de enviar o meu pedido de processamento contendo o documento/email para que o sistema classifique automaticamente o assunto e me de respostas rápidas para o mesmo.

- Antes do pedido ser enviado deve ser verificado se o campo de remetente e email estão preenchidos. Caso não estejam preenchidos explicar o por que da importância de que estejam preenchidos.
- O envio do pedido deve ser feito através de um botão simples.

**Mostrar a categoria atribuída ao email (Produtivo ou Improdutivo).**

Como leitor eu gostaria de visualizar a categoria atribuída ao email pela IA para que por via de dúvidas eu possa verificar a coesão da análise feita pelo sistema.

- Devem ser definidas cores para distinguir e ficar bem visível se um email é produtivo ou improdutivo.

**Exibir a resposta automática sugerida pelo sistema.**

Como leitor eu gostaria de visualizar as respostas geradas pelo sistema para que eu possa escolher a que mais me agrada.

- A interface de visualização deve ser simples.

# Requisitos Não Funcionais

**O sistema frontend deve ser desenvolvido em HTML.**

**O sistema backend deve ser desenvolvido em Python.**

**O frontend e backend do sistema devem estar integrados.**

**O sistema ao todo deve ser hospedado em um serviço de nuvem.**
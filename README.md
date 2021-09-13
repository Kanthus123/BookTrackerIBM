# Desafio Book Tracker

### Informações Importantes
---
1. O App web foi dividido em 2 partes dentro da pasta BookTrackerIBM :

        BooktrackerIbm -> É uma API do Backend que cuida da estrutura do Banco e rotas das requisições HTTP agindo como Middleware.

        BookTrackerIbmFront -> Inferface do APP, Requisições HTTP de CRUD pro banco.

2. A pasta do venv foi upada apenas por questões de praticidade, porem dentro da pasta booktrackeribm se encontra o requirements.txt com as bibliotecas python utilizadas.

3. Sqlite3 foi o banco escolhido por ser leve e facilmente utilizado em outras máquinas

4. O schema do banco pode ser visto no arquivo dump.sqlite.sql e o modelo da tabela livros em .\BookTrackerIBM\booktrackeribm\booktrackerapi\models.py
---

# Tecnologias Usadas

FrontEnd
- React
- Javascript

BackEnd
- Sqlite3
- Python
- Django

# Objetivos Alcançados

- Permitir que livros sejam listados;
- Permitir que livros sejam cadastrados;
- Permitir que livros sejam removidos;
- Permitir que o status de leitura do livro seja alterado;
- Permitir que uma nota seja informada ao trocar o status para ‘Lido’;

# Como Rodar O Projeto

#### 1. Back-end 
Caso desejar utilizar o VENV:
    
        .\venv\Scripts\activate na raiz do projeto
        
Caso não deseje utilizar o VENV:
    
        # Arquivo se encontra na raiz da pasta booktrackeribm
        pip install -r requirements.txt 
    
Ativar o servidor do back-end:

        # Dentro da raiz da pasta booktrackeribm
        python .\manage.py runserver
        
#### 2. Front-end:

        # Na raiz da pasta booktrackeribmfront
        npm install
		
		# Uma página web deve ser aberta automáticamente em poucos segundos
        npm start



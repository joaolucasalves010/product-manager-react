# 📦 Projeto React com JSON Server

Este projeto é uma aplicação React que utiliza o **JSON Server** como
backend fake. A aplicação permite **adicionar produtos**, que são
gravados automaticamente no arquivo `db.json` através de requisições
HTTP feitas pelo frontend.

## 🚀 Tecnologias utilizadas

-   React\
-   JavaScript / JSX\
-   Vite (ou similar)\
-   JSON Server\
-   Node.js

## ▶️ Pré-requisitos

-   Node.js instalado (versão recomendada \>= 16)
-   npm ou yarn

## ▶️ Como rodar o projeto

### 1️⃣ Instalar dependências

``` bash
npm install
# ou
# yarn
```

### 2️⃣ Rodar o frontend React

``` bash
npm run dev
# ou
# yarn dev
```

### 3️⃣ Rodar o JSON Server

``` bash
npm run server
# ou
# yarn server
```

> **Atenção:** é necessário rodar **ambos** os comandos ao mesmo tempo
> (frontend + server) durante o desenvolvimento.

O JSON Server inicia na porta **3000** por padrão:

    http://localhost:3000

## 📁 Estrutura do projeto (exemplo)

    src/
      components/
      pages/
    public/
    data/db.json        ← Produtos são gravados aqui pela aplicação
    package.json
    README.md

## 🌐 Endpoints da API (JSON Server)

Se o `db.json` contém inicialmente:

``` json
{
  "products": []
}
```


A aplicação React faz as requisições (ex.: `fetch` ou `axios`) para
esses endpoints e o JSON Server atualiza `db.json` automaticamente.

## 📦 Exemplo de scripts no package.json

Verifique se o seu `package.json` possui algo assim:

``` json
"scripts": {
  "dev": "vite",
  "start": "vite", 
  "server": "json-server --watch db.json --port 3000",
  "build": "vite build"
}
```

> Ajuste `dev`/`start` caso use Create React App (`react-scripts start`)
> ou Next.js.

## 📝 Sobre o db.json

Você **não precisa editar manualmente**; ao adicionar produtos pela
interface, a aplicação envia um `POST /products` e o JSON Server grava
no `db.json`. Exemplo de estado do arquivo após inserções:

``` json
{
  "products": [
    {
      "id": 1,
      "name": "Mouse Gamer",
      "price": 99.9,
      "description": "Mouse com LED e alta precisão"
    },
    {
      "id": 2,
      "name": "Teclado Mecânico",
      "price": 249.9
    }
  ]
}
```

## ⚠️ Observações importantes

-   O JSON Server é **apenas para desenvolvimento** e prototipagem ---
    não use em produção.
-   Se a porta `3000` já estiver em uso pelo frontend, troque a porta do
    JSON Server (ex.: `--port 3001`) ou ajuste o frontend para usar
    outra porta.
-   Para evitar problemas de CORS ao consumir a API, configure proxy no
    seu bundler (ex.: `vite.config.js`) ou use `fetch`/`axios` com a URL
    completa (`http://localhost:3000`).

## 📃 Licença

Projeto livre para estudos e prototipagem.

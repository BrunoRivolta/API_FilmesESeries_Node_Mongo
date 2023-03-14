# API com mongo


## Criando projeto

npm init -y = inicia projeto

npm install --save-dev nodemom  = instalacao do nodemom

npm install express

no pakage.json adicionar a linha   "type": "module",

criar .gitignore = conteudo node_modules


## Criando servidor basico com HTTP

criar servidor = server.js

```
import http from 'http'  //importação http

const port = 3000  //porta

const server = http.createServer((req, res) => {          //criando servidor
    res.writeHead(200, {'Content-Type': 'text/plain'})   //o que sera desolvido no caso um status 200 e formato de texto
    res.end('Curso de node')   //resposta
})

server.listen(port, () => {  //este comando fica escutando a porta do servidor, tambem nos avisa qnd ele esta funcionando
    console.log(`Servidor funcionando na http://localhost:${port}`)
})
```

Ja podemos fazer a requisição no postmam


## Colocando rotas

```
import http from 'http'

const port = 3000

const rotas = {                    //definindo rotas
    '/': 'Curso de node',
    '/filmes': 'Estou em filmes',
    '/diretor': 'Diretor',
    '/canal': 'Canal'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])     //adicionando a lista de rotas aos endereços do servidor
})

server.listen(port, () => {
    console.log(`Servidor funcionando na http://localhost:${port}`)
})
```

## Criando APP.js e utilizar Express

criar pasta src e arquivo app.js

```
import express from 'express'

const app = express()

const files = [                         //resposta
    {filme: 'a novissa rebelde'},
    {filme: 'e o vento levou'}
]

app.get('/', (req, res) => {              //rota /
    res.status(200).send('Filmes API')
})

app.get('/livros', (req, res) => {       //rota /livros
    res.status(200).json(livros)
})

export default app
```

Midificando o server.js para usar o app em ver de usar http

```
import app from './src/app.js'

const port = process.env.PORT || 3000  //opçao de variavel de ambiente

app.listen(port, () => {   //usando app
    console.log(`Servidor funcionando na http://localhost:${port}`)
})
```

Testar no postman
# API com mongo


## Criando projeto

npm init -y = inicia projeto

npm install --save-dev nodemom  = instalacao do nodemom

no pakage.json adicionar a linha   "type": "module",


## Criando servidor basico

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
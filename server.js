import http from 'http'

const port = 3000

const rotas = {
    '/': 'Curso de node',
    '/filmes': 'Estou em filmes',
    '/diretores': 'Diretores',
    '/canais': 'Canais'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor funcionando na http://localhost:${port}`)
})
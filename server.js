import http from 'http'

const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Curso de node')
})

server.listen(port, () => {
    console.log(`Servidor funcionando na http://localhost:${port}`)
})
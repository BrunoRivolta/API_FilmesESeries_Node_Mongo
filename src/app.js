import express from 'express'

const app = express()

app.use(express.json())

const filmes = [
    {filme: 'a novissa rebelde'},
    {filme: 'e o vento levou'}
]

app.get('/', (req, res) => {
    res.status(200).send('Filmes API')
})

app.get('/filmes', (req, res) => {
    res.status(200).json(filmes)
})

app.post('/filmes', (req, res) => {
    filmes.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
})


export default app
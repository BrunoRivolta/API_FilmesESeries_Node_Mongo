import express from 'express'

const app = express()

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

export default app
import express from 'express'

const app = express()

app.use(express.json())

const filmes = [
    {
        id: 1,
        filme: 'a novissa rebelde'
    },
    {
        id: 2,
        filme: 'e o vento levou'
    }
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

app.put('/filmes/:id', async (req, res) => {
    const id = req.params.id
    const index = await filmes.findIndex(item => item.id == id)
    filmes[index].filme = req.body.filme
    res.status(200).json(filmes[index])
})


export default app
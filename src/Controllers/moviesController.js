import movies from '../models/Movies.js'

class MoviesController {

    static listMovies = async (req, res) => {
        try{
            const allMovies = await movies.find()
            res.status(200).json(allMovies)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static listMovieById = async (req, res) => {
        try {
            const id = req.params.id
            const movie = await movies.findOne({_id: id})
            res.status(200).json(movie)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static addMovie = async (req, res) => {
        try {
            const newMovie = new movies(req.body)
            newMovie.save()
            res.status(201).send('Livro cadastrado com sucesso')
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }


}

export default MoviesController

/*

.findOneAndUpdate
app.put('/filmes/:id', async (req, res) => {
    const {id} = req.params
    const index = await filmes.findIndex(item => item.id == id)
    filmes[index].filme = req.body.filme
    res.status(200).json(filmes[index])
})

app.put('/filmes/:id', async (req, res) => {
    const {id} = req.params
    const index = await filmes.findIndex(item => item.id == id)
    filmes[index].filme = req.body.filme
    res.status(200).json(filmes[index])
})

app.delete('/filmes/:id', async (req, res) => {
    const {id} = req.params
    const index = await filmes.findIndex(item => item.id == id)
    filmes.splice(index, 1)
    res.status(200).send(`Filmes ${id} Apagado com sucesso`)
})
 
*/
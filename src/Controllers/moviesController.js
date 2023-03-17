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
            res.status(201).send('Filme cadastrado com sucesso')
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static updateMovie = async (req, res) => {
        try {
            const id = req.params.id
            const update = req.body
            const updateMovie = await movies.findOneAndUpdate({_id: id}, update)
            res.status(200).send('Filme atualizado com sucesso') 
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static deleteMovie = async (req, res) => {
        try {
            const id = req.params.id
            const deleteMovie = await movies.findOneAndDelete({_id: id})
            res.status(200).send(`Filme id: ${id}. Apagado com sucesso`)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

}

export default MoviesController

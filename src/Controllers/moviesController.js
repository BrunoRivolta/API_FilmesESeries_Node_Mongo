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
}

export default MoviesController
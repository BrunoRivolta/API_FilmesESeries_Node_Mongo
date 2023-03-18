import express from "express"
import MoviesController from "../controllers/moviesController.js"

const router = express.Router()

router
    .get('/filmes', MoviesController.listMovies)
    .get('/filmes/:id', MoviesController.listMovieById)
    .post('/filmes', MoviesController.addMovie)
    .put('/filmes/:id', MoviesController.updateMovie)
    .delete('/filmes/:id', MoviesController.deleteMovie)

export default router


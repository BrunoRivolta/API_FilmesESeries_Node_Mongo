import express from "express"
import MoviesController from "../controllers/moviesController.js"

const router = express.Router()

router
    .get('/filmes', MoviesController.listMovies)
    .get('/filmes/:id', MoviesController.listMovieById)
    .post('/filmes', MoviesController.AddMovie)

export default router


import express from "express"
import MoviesController from "../controllers/moviesController.js"

const router = express.Router()

router
    .get('/livros', MoviesController.listMovies)

export default router


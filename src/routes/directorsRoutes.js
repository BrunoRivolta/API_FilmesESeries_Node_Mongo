import express from 'express'
import DirectorsController from '../controllers/directorsController.js'

const router = express.Router()

router
    .get('/diretores', DirectorsController.listDirectors)
    .get('/diretores/:id', DirectorsController.listDirectorById)
    .post('/diretores', DirectorsController.addDirector)
    .put('/diretores/:id', DirectorsController.updateDirector)
    .delete('/diretores/:id',DirectorsController.deleteDirector)

export default router



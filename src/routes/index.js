import express from 'express'
import movies from './moviesRoutes.js'

const routes = (app) => {
    app.route('./').get((req, res) => {
        res.status(200).send({titulo: 'API Movies and Series'})
    })

    app.use(
        express.json(),
        movies
    )
}

export default routes

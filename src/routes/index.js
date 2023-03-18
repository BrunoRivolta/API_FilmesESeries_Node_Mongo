import express from 'express'
import movies from './moviesRoutes.js'
import channels from './channelsRoutes.js'


const routes = app => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'API Movies and Series'})
    })

    app.use(
        express.json(),
        movies,
        channels
    )
}

export default routes

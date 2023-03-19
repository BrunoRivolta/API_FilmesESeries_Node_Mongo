import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import swaggerUi from 'swagger-ui-express'
//import swaggerConf from './swagger/swagger.json' assert { type: 'json' }

db.on('error', console.log.bind(console, 'Erro conexão com banco de dados'))
db.once('open', () => {
    console.log('Conexão mongo feita com sucesso')
})

const app = express()

app.use(express.json())

app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	)
	next()
})

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf))

routes(app)

export default app
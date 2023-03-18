import directors from '../models/Directors.js'

class DirectorsController {

    static listDirectors = async (req, res) => {
        try{
            const allDirectors = await directors.find()
            res.status(200).json(allDirectors)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static listDirectorById = async (req, res) => {
        try {
            const id = req.params.id
            const director = await directors.findOne({_id: id})
            res.status(200).json(director)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static addDirector = async (req, res) => {
        try {
            const newDirector = new directors(req.body)
            newDirector.save()
            res.status(201).json({message: "Diretor cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static updateDirector = async (req, res) => {
        try {
            const id = req.params.id
            const update = req.body
            const updateDirector = await directors.findOneAndUpdate({_id: id}, update)
            res.status(200).json({message: "Diretor atualizado com sucesso"}) 
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static deleteDirector = async (req, res) => {
        try {
            const id = req.params.id
            const deleteDirector = await directors.findOneAndDelete({_id: id})
            res.status(200).json({message: `Diretor id: ${id}. Apagado com sucesso`})
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }
}

export default DirectorsController

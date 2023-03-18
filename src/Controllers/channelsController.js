import channels from "../models/Channels.js"

class ChannelsController {

    static listChannels = async (req, res) => {
        try{
            const allChannels = await channels.find()
            res.status(200).json(allChannels)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static listChannelById = async (req, res) => {
        try {
            const id = req.params.id
            const channel = await channels.findOne({_id: id})
            res.status(200).json(channel)
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static addChannel = async (req, res) => {
        try {
            const newChannel = new channels(req.body)
            newChannel.save()
            res.status(201).json({message: "Canal cadastrado com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static updateChannel = async (req, res) => {
        try {
            const id = req.params.id
            const update = req.body
            const updateChannel = await channels.findOneAndUpdate({_id: id}, update)
            res.status(200).json({message: "Canal atualizado com sucesso"}) 
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

    static deleteChannel = async (req, res) => {
        try {
            const id = req.params.id
            const deleteChannel = await channels.findOneAndDelete({_id: id})
            res.status(200).json({message: `Canal id: ${id}. Apagado com sucesso`})
        } catch (error) {
            console.log(error)
            res.status(500).send('Erro no servidor!')
        }
    }

}

export default ChannelsController

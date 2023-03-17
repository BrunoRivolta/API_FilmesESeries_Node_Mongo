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

}

export default ChannelsController

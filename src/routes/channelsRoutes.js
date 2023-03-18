import express from "express"
import ChannelsController from "../controllers/channelsController.js"

const router = express.Router()

router
    .get('/canais', ChannelsController.listChannels)
    .get('/canais/:id', ChannelsController.listChannelById)
    .post('/canais', ChannelsController.addChannel)
    .put('/canais/:id', ChannelsController.updateChannel)
    .delete('/canais/:id',ChannelsController.deleteChannel)

export default router



import express from "express"
import ChannelsController from "../controllers/channelsController.js"

const router = express.Router()

router
    .get('/canais', ChannelsController.listChannels)
    .get('/canais/:id', ChannelsController.listChannelById)

export default router


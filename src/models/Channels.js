import mongoose from "mongoose";

const channelsSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        img: {type: String, required: true},
    }
)

let channels = mongoose.model('channels', channelsSchema)

export default channels
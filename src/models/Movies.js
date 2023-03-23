import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        year: {type: Number, required: true},
        director_id: {type: mongoose.Schema.Types.ObjectId, required: true},
        channel_id: {type: mongoose.Schema.Types.ObjectId, required: true},
        img: {type: String, required: true},
        trailer: {type: String, required: true},
        type: {type: String}
    }
)

let movies = mongoose.model('movies', moviesSchema)

export default movies
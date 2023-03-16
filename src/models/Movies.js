import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        year: {type: Number, required: true},
        director: {type: mongoose.Schema.Types.ObjectId, required: true},
        chanel: {type: mongoose.Schema.Types.ObjectId, required: true},
        img: {type: String, required: true}
    }
)

let movies = mongoose.model('movies', moviesSchema)

export default movies
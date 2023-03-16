import mongoose from "mongoose";

const filmesSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        year: {type: Number, required: true},
        director: {type: String, required: true},
        chanel: {type: String, required: true},
        img: {type: String, required: true}
    }
)

let filmes = mongoose.model('filmes', filmesSchema)

export default filmes
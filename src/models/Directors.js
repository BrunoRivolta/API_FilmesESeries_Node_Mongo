import mongoose from "mongoose";

const directorsSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        country: {type: String, required: true},
        img: {type: String, required: true},
    }
)

let directors = mongoose.model('directors', directorsSchema)

export default directors
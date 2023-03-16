import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://brrivolta:Br260800@cluster0.c9swxgg.mongodb.net/filmes_series')

let db = mongoose.connection

export default db


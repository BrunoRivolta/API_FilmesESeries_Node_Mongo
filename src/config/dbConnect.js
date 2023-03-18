import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://brrivolta:br260800@cluster0.c9swxgg.mongodb.net/moviesAndSeries')

let db = mongoose.connection

export default db


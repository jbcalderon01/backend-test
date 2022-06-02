import { connect } from "mongoose"

const uri = 'mongodb+srv://mongoDb:Heekyo.01@cluster0.ikprk46.mongodb.net/?retryWrites=true&w=majority'

export const connectMongo = () => {
    try {
        connect(uri)
        console.log('Mongo DB Connected')
    } catch (err) {
        console.log(err)
    }
}


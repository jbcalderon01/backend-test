import { model, Schema } from "mongoose";
import { IBook } from "../../../interfaces";

const booksSchema = new Schema({
    _id: String,
    name: String,
    title: String
})

export const booksMongoModel = model('books', booksSchema)


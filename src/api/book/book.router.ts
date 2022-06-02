import { Router } from "express";
import { bookService } from "../../core/book";
import { BookController } from "./book.controller";

const bookRouter = Router()

const bookController = new BookController(bookService)

bookRouter.post('/', bookController.create())
bookRouter.get('/', bookController.find())

export default bookRouter
import { Router } from "express";
import bookRouter from "./book/book.router";

const router = Router()

router.use('/books', bookRouter)


export default router
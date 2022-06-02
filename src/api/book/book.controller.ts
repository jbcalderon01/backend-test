import { BookService } from "../../core/book/book.service";
import {Request, Response} from 'express'


export class BookController {
    constructor(private service: BookService) {
        this.service = service
    }

    create() {
        return async (req: Request, res: Response) => {
            try {
                const {body} = req
                const data = await this.service.create(body)
                res.json(data)
            } catch (err: any) {
                res.status(Number(err.code) || 500)
                res.json({success: false, error: err})
            }
        }
    }

    find(){
        return async (req: Request, res: Response) => {
            try {
                const data = await this.service.find()
                res.json(data)
            } catch (error: any) {
                res.status(Number(error.code) || 500)
                res.json({success: false, error: error})
            }
        }
    }
}


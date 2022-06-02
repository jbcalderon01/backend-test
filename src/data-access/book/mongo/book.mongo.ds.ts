import { Model } from "mongoose";
import { IBookMongoRepository } from "../../../core/book";
import { IBook } from "../../../interfaces";

export class BookMongoDataSource implements IBookMongoRepository  {
    constructor(private model: Model<any>){
        this.model = model
    }

    async create(data: any){
        return await this.model.create(data)
    }

    async find() {
        return await this.model.find()
    }
}


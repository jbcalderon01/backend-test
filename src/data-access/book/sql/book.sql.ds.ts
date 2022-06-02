import { ModelDefined } from "sequelize/types";
import { IBookSqlRepository } from "../../../core/book";

export class BooksSqlDataSource implements IBookSqlRepository {
    constructor(private model: ModelDefined<any, any>) {
        this.model = model
    }

    create(data: any){
        return this.model.create(data)
    }

    find() {
        return this.model.findAll()
    }
}


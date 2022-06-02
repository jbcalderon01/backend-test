import { IBookMongoRepository, IBookSqlRepository } from "./book.repository";


export class BookService {
    constructor(
        private bookSqlRepository: IBookSqlRepository,
        private bookMongoRepository: IBookMongoRepository
    ){
        this.bookMongoRepository = bookMongoRepository
        this.bookSqlRepository= bookSqlRepository
    }

    async create(data: any) {
        const bookCreated = await this.bookSqlRepository.create(data)
        await this.bookMongoRepository.create(data)

        return bookCreated
    }

    async find() {
        const resSql = await this.bookSqlRepository.find()
        const resMongo = await this.bookMongoRepository.find()

        return {res_sql: resSql, res_mongo: resMongo}
    }
}

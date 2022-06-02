import { BookMongoDataSource, booksMongoModel } from "./mongo";
import { booksSqlModel, BooksSqlDataSource } from "./sql";


export const booksMongoRepository = new BookMongoDataSource(booksMongoModel)

export const booksSqlRepository = new BooksSqlDataSource(booksSqlModel)

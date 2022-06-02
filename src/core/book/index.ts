import { booksMongoRepository, booksSqlRepository } from '../../data-access/book'
import { BookService } from './book.service'

export * from './book.repository'


export const bookService = new BookService(
    booksSqlRepository,booksMongoRepository
)
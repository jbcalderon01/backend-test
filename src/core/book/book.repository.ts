export interface IBookMongoRepository {
    create(data: any): Promise<any>
    find(): Promise<any>
    
}

export interface IBookSqlRepository {
    create(data: any): Promise<any>
    find(): Promise<any>
}
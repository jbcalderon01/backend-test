import { PostgresBaseInterface } from "../_generic";

export interface IBook extends PostgresBaseInterface {
    name: String,
    title: String
}
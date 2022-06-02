import { connectSQL } from "../../../config";
import Sequelize from 'sequelize'

const db = connectSQL()

export const booksSqlModel = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    }
})


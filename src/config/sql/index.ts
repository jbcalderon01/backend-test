import { Dialect, Sequelize } from 'sequelize'
import { Sequelize as TSequelize } from 'sequelize/types'
import { config } from '..'

let dbInstance: TSequelize | null = null

/**
 * Start the Sequelize Connection
 * @return {Sequelize} Sequelize Instance
*/
export const connectSQL = (): Sequelize => {
    if (!dbInstance) {
      dbInstance = new Sequelize(
        config.DB.SEQUELIZE.NAME,
        config.DB.SEQUELIZE.USER,
        config.DB.SEQUELIZE.PASS,
        {
          host: config.DB.SEQUELIZE.HOST,
          dialect: config.DB.SEQUELIZE.DIALECT as Dialect
        }
      )
    }
    return dbInstance
  }

export default connectSQL

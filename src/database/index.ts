import { Sequelize } from "sequelize";
import { IDatabase } from "../config/IDatabase";
const DBconfig = require("../config/database.json") as IDatabase;
export const sequelize = new Sequelize(
  DBconfig.development.database,
  DBconfig.development.username,
  DBconfig.development.password,
  {
    host: DBconfig.development.host,
    dialect: DBconfig.development.dialect,
  }
);

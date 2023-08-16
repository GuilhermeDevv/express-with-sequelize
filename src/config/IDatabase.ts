import { Dialect } from "sequelize";

export interface IDatabase {
  development: DbConfig;
  test: DbConfig;
  production: DbConfig;
}

export interface DbConfig {
  username: string;
  password: string ;
  database: string;
  host: string;
  dialect: Dialect 
}

import { Dialect } from "sequelize";

export interface IDatabase {
  host: string,
  dialect: Dialect,
  database: string,
  username: string,
  password: string,
  define: {
    timestamps: boolean,
    underscored: boolean,
  },
};

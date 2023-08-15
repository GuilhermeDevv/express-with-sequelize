import express from "express";
import { Sequelize } from "sequelize";
import { IDatabase } from "./config/IDatabase";
const app = express();
const DBconfig = require("./config/database") as IDatabase;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize(
  DBconfig.database,
  DBconfig.username,
  DBconfig.password,
  {
    host: DBconfig.host,
    dialect: DBconfig.dialect,
  }
);

sequelize.sync({ force: true }).then(() => {
  console.log("Database connected");
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

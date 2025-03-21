import app from "./app";
import connectDBMongo from "./config/mongodb";
import connectDBMysql from "./config/mysqldb";
import connectDBSqlite from "./config/sqlitedb";
import connectDBPostgres from "./config/postgresqldb";
import { DriversDB } from "./enums/drivers";
import { Config } from "./config/config";
import mongoose from "mongoose";
import { logger } from "./utils/logs";

const port = Config.PORT;
//pending to implement the database connection(Redis,SQL Server,elasticsearch)
switch (Config.DBDRIVER) {
  case DriversDB.MONGODB:
    connectDBMongo();
    mongoose.connection.once("open", () => {
      console.log("Connected to MongoDB");
    });
    break;
  case DriversDB.MYSQL:
    connectDBMysql();
    break;
  case DriversDB.SQLITE:
    connectDBSqlite();
    break;
  case DriversDB.POSTGRES:
    connectDBPostgres();
    break;
  default:
    console.log("Connected to Mock data");
    break;
}

const server = app.listen(Config.PORT, () => {
  console.log(`Listening: http://${Config.HOST}:${Config.PORT}/`);
  logger.log({
    level: "info",
    message: `Server running on http://${Config.HOST}:${Config.PORT}/`,
  });
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

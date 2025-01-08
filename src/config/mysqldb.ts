import mysql from "mysql2/promise";
import { Config } from "./config";
//change by a pool connection best performance
const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "root",
  database: "test",
  multipleStatements: true,
  connectionLimit: 10,
};

const connectionString = Config.MYSQL ?? DEFAULT_CONFIG;
// export const connection = mysql.createConnection(connectionString)
export const connection = mysql.createPool(connectionString);

const connectDBMysql = async () => {
  try {
    console.log("MysqlDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDBMysql;

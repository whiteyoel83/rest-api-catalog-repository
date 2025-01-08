import sqlite3 from "sqlite3";
import { stmt } from "../const/sqlStatement";

//using memory
export const connection = new sqlite3.Database(":memory:");
//using test.db file
// export const db = new sqlite3.Database(`${__dirname}${path.sep}${Config.SQLITE}`, sqlite3.OPEN_READWRITE)

const connectDBSqlite = async () => {
  try {
    let sqlStatement = stmt.SQLITE.CREATE_TABLE;
    console.log(sqlStatement);
    connection.serialize(async () => {
      connection.run(stmt.SQLITE.CREATE_TABLE);
    });
    console.log("SQLiteDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDBSqlite;

import { Config } from "./config";
import { Pool } from "pg";

export const connection = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "test",
  max: 10,
});

const connectDBPostgres = async () => {
  try {
    await connection.connect();
    console.log("PostgresDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDBPostgres;

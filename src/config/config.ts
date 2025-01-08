import { DriversDB } from "../enums/drivers";
const {
  port: PORT = 3000,
  apiVersion: API_VERSION = "v1",
  apiKey: API_KEY = "some-key",
  acceptedOrigins: ACCEPTED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8080",
    "https://app.catalog.dev",
  ],
  dbdriver: DBDRIVER = DriversDB.MOCK,
  mongodb: MONGODB = "mongodb://user:password@localhost:27017/catalog",
  sqlite: SQLITE = "catalog.db",
  mysql: MYSQL = "mysql://user:password@127.0.0.1/catalog",
  postgresql: POSTGRESQL = "postgresql://user:password@127.0.0.1:5432/catalog",
} = process.env;

export const Config = {
  PORT,
  API_VERSION,
  API_KEY,
  ACCEPTED_ORIGINS,
  DBDRIVER,
  MONGODB,
  SQLITE,
  MYSQL,
  POSTGRESQL,
};

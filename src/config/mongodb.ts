import { connect } from "mongoose";
import { Config } from "./config";

const connectDBMongo = async () => {
  try {
    const mongoURI: string = Config.MONGODB;
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDBMongo;

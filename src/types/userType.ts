import mongoose, { Document, Schema } from "mongoose";

export type TUser = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  username: string;
  picture?: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IUserModel extends TUser, Document {}

const userSchema: Schema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  picture: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUserModel>("Brand", userSchema);

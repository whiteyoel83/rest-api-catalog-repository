import mongoose, { Document, Schema } from "mongoose";

export type TUser = {
  email: string;
  password: string;
  username: string;
  phone?: string;
  token?: string;
  picture?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface IUserModel extends TUser, Document {}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phone: { type: String },
  token: { type: String },
  picture: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUserModel>("User", userSchema);

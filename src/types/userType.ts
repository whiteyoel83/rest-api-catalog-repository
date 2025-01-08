import mongoose, { Document, Schema } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  username?: string;
  picture?: string;
};

export interface IUserModel extends TUser, Document {}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  },
});

export default mongoose.model<IUserModel>("Brand", userSchema);

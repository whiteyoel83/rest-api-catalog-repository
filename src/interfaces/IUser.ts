export interface IUser {
  id: string;
  email: string;
  password: string;
  username: string;
  phone?: string;
  token?: string;
  picture?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

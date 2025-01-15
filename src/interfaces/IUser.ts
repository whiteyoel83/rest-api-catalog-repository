export interface IUser {
  id: string;
  email: string;
  password: string;
  username: string;
  phone?: string;
  token?: string;
  refreshToken?: string;
  picture?: string;
  createdAt?: Date;
  updatedAt?: Date;
  "2faEnable"?: boolean;
  "2faSecret"?: string;
}

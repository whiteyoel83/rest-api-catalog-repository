import { IProfile } from "./IProfile";

export interface IAuthRepository {
  login(email: string, password: string): Promise<IProfile | null>;
  register(profile: IProfile): Promise<IProfile>;
  profile(id: string): Promise<IProfile | null>;
  update(id: string, profile: IProfile): Promise<IProfile | null>;
  delete(id: string): Promise<boolean>;
}

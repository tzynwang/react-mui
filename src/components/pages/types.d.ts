import { Gender, User } from "./../../models/GeneralTypes";

export interface FetchUserListRes {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export { Gender, User };

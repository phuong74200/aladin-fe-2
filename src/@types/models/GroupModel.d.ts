import { UserModel } from "./UserModel";

export interface GroupModel {
  subject: string;
  students?: number;
  lessons: number;
  duration: number;
  description: string;
  location: string;
  schedule: Date[];
  ta: UserModel;
  price: number;
}

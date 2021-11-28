import { User } from "./user";

export interface Review {
  writer: User | null;
  title: string;
  startDate: Date;
  endDate: Date;
  content: string;
  rating: number;
  bizId: string;
}

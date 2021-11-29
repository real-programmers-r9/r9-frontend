import { Gender, JobStatus, PayMentsMethod } from "./enums";
import { User } from "./user";

export interface Job {
  writer: User | null;
  title: string;
  deadline: Date;
  detail: string;
  personnel: number;
  age: number;
  workType: string;
  adress: string;
  payment: PayMentsMethod;
  workingDay: string[];
  startTime: Date;
  endTime: Date;
  wage: number;
  status: JobStatus;
  period: string;
  gender: Gender;
  sectors: string;
}

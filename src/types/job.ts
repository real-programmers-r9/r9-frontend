import { User } from "./user";

export enum PayMentsMethod {
  PERHOUR = "PERHOUR",
  PERDAY = "PERDAY",
  PERMONTH = "PERMONTH",
}

export enum JobStatus {
  ACTIVATE = "ACTIVATE",
  INAVCTIVE = "INAVCTIVE",
}

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
}

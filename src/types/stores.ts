import { JobStatus, PayMentsMethod } from "./enums";

export interface User {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  name: string;
  email: string;
  role: string;
  address?: string;
}

export interface Auth {
  user: User | null;
}

export interface IJobState {
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

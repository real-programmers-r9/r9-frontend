import { Gender, JobStatus, PayMentsMethod } from "./enums";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  BUSINESS = "BUSINESS",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Auth {
  user: User | null;
}

export interface IJobState {
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

export interface IReviewState {
  writer: User | null;
  title: string;
  startDate: Date;
  endDate: Date;
  content: string;
  rating: number;
}

export interface IApplyState {
  user: User | null;
  title: string;
  job: IJobState;
  moreDetail: string;
}

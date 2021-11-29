import { Gender, JobStatus, PayMentsMethod } from "./enums";
import { User } from "./user";

export interface AuthState {
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
  title: string;
  startDate: Date;
  endDate: Date;
  content: string;
  rating: number;
  bizId: string;
}

export interface IApplyState {
  user: User | null;
  title: string;
  job: IJobState;
  moreDetail: string;
}

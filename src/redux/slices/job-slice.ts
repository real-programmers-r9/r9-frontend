import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobStatus, PayMentsMethod } from "src/types/enums";
import { IJobState } from "src/types/stores";

const initialState: IJobState = {
  writer: null,
  title: "",
  deadline: new Date(),
  detail: "",
  personnel: 0,
  age: 0,
  workType: "",
  adress: "",
  payment: PayMentsMethod.PERHOUR,
  workingDay: [],
  startTime: new Date(),
  endTime: new Date(),
  wage: 8750,
  status: JobStatus.ACTIVATE,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state: any, { payload: { key, value } }: PayloadAction<any>) => {
      state[key] = value;
    },
  },
});

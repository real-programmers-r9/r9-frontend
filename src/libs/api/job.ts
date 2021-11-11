import { IJobState } from "src/types/stores";
import client from "./client";

const url = {
  GET_JOBS: "/jobs",
  GET_JOBID: "",
};

/** 공고 생성 */
export const createJobAPI = async (job: IJobState) => {
  const response = await client.post("/jobs", job);
  return response.data;
};

/** 공고 리스트 호출 */
export const findJobsAPI = async () => {
  const resposne = await client.get(url.GET_JOBS);
  return resposne.data;
};

/** 특정 ID 가진 공고 호출 */
export const findJobByIdAPI = async (id: number) => {
  const resposne = await client.get(`${url.GET_JOBS}/${id}`);
  return resposne.data;
};

/** 공고 삭제 */
export const deleteJobAPI = async (id: number) => {
  await client.delete(`/jobs/${id}`);
};

/** 공고 업데이트 */
export const updateJobAPI = async (id: number) => {
  await client.patch(`/jobs/${id}`);
};

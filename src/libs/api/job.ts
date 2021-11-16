import { Job } from "~/types/job";
import { client } from ".";

/** 공고 생성 */
export const createJob = async (data: Job) => {
  const response = await client.post("/jobs", data);
  return response.data;
};

/** 공고 리스트 호출 */
export const findJobs = async () => {
  const resposne = await client.get("/jobs");
  return resposne.data;
};

/** 특정 ID 가진 공고 호출 */
export const findJobById = async (id: number) => {
  const resposne = await client.get(`/jobs/${id}`);
  return resposne.data;
};

/** 공고 삭제 */
export const deleteJob = async (id: number) => {
  await client.delete(`/jobs/${id}`);
};

/** 공고 업데이트 */
export const updateJob = async (id: number) => {
  await client.patch(`/jobs/${id}`);
};

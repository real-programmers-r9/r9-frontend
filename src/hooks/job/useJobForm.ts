import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJobAPI } from "src/libs/api/job";
import { selectJob, setJob } from "src/redux/slices/job-slice";

export default function useJobForm() {
  const dispatch = useDispatch();
  const job = useSelector(selectJob);

  const onChangeJob = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    dispatch(setJob((prev: any) => ({ ...prev, [name]: value })));
  };

  //공고 생성
  const onCreateJob = async () => {
    try {
      await createJobAPI(job);
    } catch (error) {
      alert("공고 작성에 실패했습니다");
    }
  };



  
  return {
    onChangeJob,
    onCreateJob,
  };
}

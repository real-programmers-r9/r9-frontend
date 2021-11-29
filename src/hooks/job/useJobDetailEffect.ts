import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { findJobByIdAPI } from "~/libs/api/job";
import { Job } from "~/types/job";

export default function useJobDetailEffect() {
  const router = useRouter();
  const { pid } = router.query;

  const [job, setJob] = useState<Job>();

  useEffect(() => {
    const getData = async () => {
      const job = await findJobByIdAPI(pid);
      setJob(job);
    };
    getData();
  }, []);
  return { job, pid };
}

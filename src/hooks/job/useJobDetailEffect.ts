import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { findJobByIdAPI } from "~/libs/api/job";
import { IJobState } from "~/types/stores";

export default function useJobDetailEffect() {
  const router = useRouter();
  const { pid } = router.query;

  const [job, setJob] = useState<IJobState>();

  useEffect(() => {
    const getData = async () => {
      const job = await findJobByIdAPI(pid);
      setJob(job);
    };
    getData();
  }, []);
  return { job, pid };
}

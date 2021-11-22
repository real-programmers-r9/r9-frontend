import React, { useEffect, useState } from "react";
import { findJobs } from "~/libs/api/jobs";

function TestPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fatchData = async () => {
      const data = await findJobs().catch(console.error);
      setData(data);
    };
    fatchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default TestPage;

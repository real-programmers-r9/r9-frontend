import React, { useEffect, useState } from "react";
import { findJobsAPI } from "~/libs/api/job";

function TestPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fatchData = async () => {
      const data = await findJobsAPI().catch(console.error);
      setData(data);
    };
    fatchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default TestPage;

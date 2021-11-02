import { NextPage } from "next";
import React from "react";
import JobPostEditor from "src/components/job-post/JobPostEditor";

const PostPage: NextPage = () => {
  return (
    <>
      <JobPostEditor />
    </>
  );
};

export default PostPage;

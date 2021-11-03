import { Box } from "@mui/system";
import { NextPage } from "next";
import React from "react";
import JobPostEditor from "src/components/job-post/JobPostEditor";

const PostPage: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "md",
        }}
      >
        <JobPostEditor />
      </Box>
    </>
  );
};

export default PostPage;

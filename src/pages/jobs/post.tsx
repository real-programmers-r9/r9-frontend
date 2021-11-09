import { Box } from "@mui/system";
import { NextPage } from "next";
import React from "react";
import JobPostEditor from "src/components/job-post/JobPostEditor";

const PostPage: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          marginX: "auto",
          maxWidth: "md",
        }}
      >
        <JobPostEditor isEdit={false} />
      </Box>
    </>
  );
};

export default PostPage;

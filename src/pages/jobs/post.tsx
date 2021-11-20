import React from "react";
import { NextPage } from "next";
import { Box } from "@mui/system";
import JobPostEditor from "~/components/job/JobPostEditor";

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

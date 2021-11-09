import React from "react";
import { Box } from "@mui/system";
import ReviewPostEditor from "src/components/review/ReviewPostEditor";

const ReviewPostPage = () => {
  return (
    <>
      <Box
        sx={{
          marginX: "auto",
          maxWidth: "md",
        }}
      >
        <ReviewPostEditor />
      </Box>
    </>
  );
};

export default ReviewPostPage;

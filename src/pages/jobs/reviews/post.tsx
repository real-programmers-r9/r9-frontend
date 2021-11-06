import { Box } from "@mui/system";
import React from "react";

import ReviewPostEditor from "src/components/review/ReviewPostEditor";

const ReviewPostPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "md",
        }}
      >
        <ReviewPostEditor />
      </Box>
    </>
  );
};

export default ReviewPostPage;

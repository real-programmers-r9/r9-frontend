import React from "react";
import { Box } from "@mui/system";
import ReviewList from "src/components/review/ReviewList";

const ReviewPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "md",
        }}
      >
        <ReviewList />
      </Box>
    </>
  );
};

export default ReviewPage;

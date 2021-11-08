import React from "react";
import { Box } from "@mui/system";
import ReviewList from "~/components/review/ReviewList";

const ReviewPage = () => {
  return (
    <Box
      sx={{
        marginX: "auto",
        maxWidth: "md",
      }}
    >
      <ReviewList />
    </Box>
  );
};

export default ReviewPage;

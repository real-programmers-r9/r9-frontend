import React from "react";
import { Box } from "@mui/system";
import ReviewList from "~/components/review/ReviewList";
import MiniSearch from "~/components/home/MiniSearch";

const ReviewPage = () => {
  return (
    <Box
      sx={{
        marginX: "auto",
        maxWidth: "md",
      }}
    >
      <MiniSearch />
      <ReviewList />
    </Box>
  );
};

export default ReviewPage;

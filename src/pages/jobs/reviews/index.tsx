import React from "react";
import ReviewList from "~/components/review/ReviewList";
import MiniSearch from "~/components/home/MiniSearch";
import { Paper, Typography } from "@mui/material";

const ReviewPage = () => {
  return (
    <Paper
      sx={{
        marginX: "auto",
        maxWidth: "md",
        padding: "25px",
      }}
    >
      <Typography align="center" variant="h4" component="div">
        후기
      </Typography>

      <MiniSearch />
      <ReviewList />
    </Paper>
  );
};

export default ReviewPage;

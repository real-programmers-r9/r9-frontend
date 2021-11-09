import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import MiniSearch from "../home/MiniSearch";

const ReviewList = () => {
  return (
    <Paper sx={{ padding: "25px" }}>
      <Typography align="center" variant="h4" component="div">
        후기
      </Typography>

      <Stack spacing={2} py={4}>
        <MiniSearch />
        {/* {reviews.map((review: any) => (
          <Box
            key={review.id}
            sx={{
              border: "1px solid rgb(192,192,192)",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 8px",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              <Link
                href={`/jobs/reviews/${review.id}`}
                color="inherit"
                underline="none"
              >
                {review.title}
              </Link>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Typography gutterBottom component="div">
                리뷰 3개
              </Typography>
              <Rating
                name="text-feedback"
                value={review.rating}
                readOnly
                precision={0.5}
                size="medium"
              />
            </Box>
          </Box>
        ))} */}
      </Stack>
    </Paper>
  );
};

export default ReviewList;

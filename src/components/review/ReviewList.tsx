import { Link, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MiniSearch from "../home/MiniSearch";

const ReviewList = () => {
  return (
    <>
      <Typography align="center" variant="h4" component="div">
        후기
      </Typography>

      <Stack spacing={2} py={4}>
        <MiniSearch />
        <Box
          sx={{
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            <Link
              href="/jobs/reviews/1"
              color="inherit"
              underline="none"
            >
              롯데리아 시흥 대야점
            </Link>
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom component="div">
              리뷰 3개
            </Typography>
            <Rating
              name="text-feedback"
              value={3.5}
              readOnly
              precision={0.5}
              size="medium"
            />
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            닥엔돈스 노량진점
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom component="div">
              리뷰 3개
            </Typography>
            <Rating
              name="text-feedback"
              value={3.5}
              readOnly
              precision={0.5}
              size="medium"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ReviewList;

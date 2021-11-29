import React from "react";
import { Link, Paper, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useBusinessEffect from "~/hooks/reviews/useBusinessEffect";

const ReviewList = () => {
  const { businesses } = useBusinessEffect();
  console.log(businesses);
  return (
    <>
      <Stack spacing={2} py={4}>
        {businesses.map((biz: any) => (
          <Box
            key={biz.id}
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
                href={`/jobs/reviews/${biz.id}`}
                color="inherit"
                underline="none"
              >
                {biz.bizName}
              </Link>
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Typography gutterBottom component="div">
                리뷰 {biz.bizreview.length}개
              </Typography>
              <Rating
                name="text-feedback"
                value={1}
                readOnly
                precision={1}
                size="medium"
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default ReviewList;

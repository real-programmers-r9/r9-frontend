import { Paper, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import useReviewEffect from "~/hooks/reviews/useReviewsEffect";
import { Review } from "~/types/review";

interface ReviewDetailProps {
  id: string | string[] | undefined;
}

const ReviewDetail = ({ id }: ReviewDetailProps) => {
  const { reviews } = useReviewEffect(id);
  return (
    <>
      <Typography align="center" variant="h4" sx={{ marginBottom: 3 }}>
        {reviews[0]?.biz?.bizName}
      </Typography>
      {reviews.map((review: Review, index) => (
        <Paper sx={{ paddingLeft: 3, paddingRight: 3 }}>
          <Stack
            spacing={2}
            py={3}
            borderBottom="1px solid #929191"
            key={index}
          >
            <Typography align="left" variant="h6">
              {review.title}
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Stack direction="row" spacing={4} justifyContent="space-between">
                <Rating
                  name="text-feedback"
                  value={review.rating}
                  readOnly
                  precision={1}
                  size="medium"
                />
                <Box sx={{ display: "flex" }}>
                  <Typography mr="10px" fontWeight="bold">
                    {review.writer?.name}
                  </Typography>
                  <Typography color="gray">
                    기간 : {moment(review.endDate).format("YY/MM/DD")} ~
                    {moment(review.startDate).format("YY/MM/DD")}
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",
                minHeight: "100px",
                border: "1px solid rgb(192,192,192)",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ padding: "15px" }}>{review.content}</Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </>
  );
};

export default ReviewDetail;

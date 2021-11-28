import React from "react";
import { Button, Rating, Stack, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useReviewForm from "~/hooks/reviews/useReviewForm";
import { selectReview } from "~/redux/slices/review-slice";
import { useRouter } from "next/router";

const ReviewPostEditor = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  const review = useSelector(selectReview);
  const { onChangeReview, onChangeRating, onCreateReview } = useReviewForm(pid);
  const { title, startDate, rating, endDate, content } = review;

  return (
    <>
      <Stack spacing={2} py={4}>
        <Typography align="center" variant="h5">
          후기 등록
        </Typography>

        <Typography align="left" variant="subtitle2">
          제목
        </Typography>
        <TextField
          sx={{ fontSize: "10", font: "menu" }}
          variant="outlined"
          label="후기 제목"
          name="title"
          size="small"
          value={title}
          onChange={onChangeReview}
        />
        <Typography align="left" variant="subtitle2">
          근무 기간
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            name="startDate"
            value={startDate}
            onChange={onChangeReview}
          />
          <Typography align="left" variant="subtitle2">
            ~
          </Typography>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            name="endDate"
            value={endDate}
            onChange={onChangeReview}
          />
        </Stack>
        <Typography align="left" variant="subtitle2">
          평점
        </Typography>
        <Rating
          name="rating"
          value={rating}
          defaultValue={2}
          precision={1}
          onChange={(e, newValue) => {
            onChangeRating(e, newValue);
          }}
        />

        <Typography align="left" variant="subtitle2">
          근무 후기
        </Typography>

        <TextField
          multiline
          minRows={12}
          maxRows={100}
          variant="outlined"
          label="근무 후기"
          name="content"
          value={content}
          onChange={onChangeReview}
        />
        <Button variant="contained" onClick={onCreateReview}>
          작성
        </Button>
      </Stack>
    </>
  );
};

export default ReviewPostEditor;

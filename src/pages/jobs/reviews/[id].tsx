import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import ReviewDetail from "src/components/review/ReviewDetail";

const ReviewPage = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "md",
        }}
      >
        <ReviewDetail id={id} />
      </Box>
    </>
  );
};

export default ReviewPage;

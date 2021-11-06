import { Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface ReviewDetailProps {
  id: string | string[] | undefined;
}

const ReviewDetail = ({ id }: ReviewDetailProps) => {
  return (
    <>
      <Typography align="center" variant="h4">
        롯데리아 시흥 대야점
      </Typography>
      <Stack spacing={2} py={4} borderBottom="1px solid #929191">
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Stack direction="row" spacing={4} justifyContent="space-between">
            <Rating
              name="text-feedback"
              value={3.5}
              readOnly
              precision={0.5}
              size="medium"
            />
            <Box sx={{ display: "flex" }}>
              <Typography mr="10px" fontWeight="bold">
                김민수
              </Typography>
              <Typography color="gray">기간 : 2021-07-01~2021-08-01</Typography>
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
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={4.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2} py={4}>
        <Typography align="left" variant="h6">
          사장님이 친절하고 단골손님도 매너가 있음
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Rating
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            size="medium"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "100px",
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ padding: "15px" }}>
            군대가야해서 어쩔수없이 그만 둿는데 어쩌구 저쩌구...
          </Typography>
        </Box>
      </Stack>
      {id}
    </>
  );
};

export default ReviewDetail;

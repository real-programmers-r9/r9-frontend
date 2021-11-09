import { MobileDatePicker } from "@mui/lab";
import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ReviewPostEditor = () => {
  const [value, setValue] = useState<any>();

  const onChange = (datevalue: any) => {
    console.log(datevalue);
    setValue(datevalue);
  };

  return (
    <>
      <Stack spacing={2} py={4}>
        <Typography align="center" variant="h4">
          후기 등록
        </Typography>

        <Typography align="left" variant="h6">
          제목
        </Typography>
        <TextField variant="outlined" label="후기 제목" name="title" />
        <Typography align="left" variant="h6">
          근무 기간
        </Typography>
        <Stack direction="row" spacing={4}>
          <MobileDatePicker
            label="시작한 날짜"
            inputFormat="yyyy-MM-DD"
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography align="left" variant="h6">
            ~
          </Typography>
          <MobileDatePicker
            label="그만둔 날짜"
            inputFormat="yyyy-MM-DD"
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
        <Typography align="left" variant="h6">
          근무 후기
        </Typography>

        <TextField
          multiline
          minRows={30}
          maxRows={100}
          variant="outlined"
          label="근무 후기"
          name="title"
        />
        <Button variant="contained">작성</Button>
      </Stack>
    </>
  );
};

export default ReviewPostEditor;

import React from "react";
import { NextPage } from "next";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
} from "@mui/material";

const SignUpPage: NextPage = () => {
  return (
    <Stack spacing={2} py={4}>
      <Typography align="center" variant="h4">
        회원가입
      </Typography>
      <TextField variant="outlined" label="이메일 주소" name="email" />
      <TextField variant="outlined" label="비밀번호" name="password" />
      <TextField
        variant="outlined"
        label="비밀번호 재확인"
        name="confirm-password"
      />
      <Card>
        <CardContent>
          <Typography variant="h6">약관 동의</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="이용약관 동의 (필수)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="개인정보 수집 및 이용동의 (필수)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="만 18세 이상입니다 (필수)"
            />
            <FormControlLabel control={<Checkbox />} label="전체 동의" />
          </FormGroup>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" size="large">
        회원가입
      </Button>
    </Stack>
  );
};

export default SignUpPage;

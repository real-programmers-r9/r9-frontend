import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Button, Typography, TextField, Stack } from '@mui/material';
import { yellow } from '@mui/material/colors';

const SignInPage: NextPage = () => {
  return (
    <Stack spacing={2} py={4}>
      <Typography align="center" variant="h4">
        로그인
      </Typography>

      <TextField variant="outlined" label="이메일 주소" name="email" />
      <TextField variant="outlined" label="비밀번호" name="password" />

      <Button variant="contained" size="large">
        로그인
      </Button>

      <Button
        sx={{ background: yellow[500], color: 'black', ':hover': { background: yellow[600] } }}
        variant="contained"
        size="large"
      >
        카카오 로그인
      </Button>

      <Link href="/signup" passHref>
        <Button>아직 회원이 아니신가요?</Button>
      </Link>
    </Stack>
  );
};

export default SignInPage;

import React from "react";
import { NextPage } from "next";
import { Paper, Stack, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "src/redux/services/api";
import { wrapper } from "src/redux/store";
import { REGEXP_PASSWORD } from "../constants/regexp";
import type { SignUpForm } from "../types/forms";

const SignUpPage: NextPage = () => {
  const { handleSubmit, control } = useForm<SignUpForm>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email("이메일 형식으로 입력해주세요!")
          .required("이메일을 입력해주세요!"),
        password: yup
          .string()
          .matches(
            REGEXP_PASSWORD,
            "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 8글자 이상이여야합니다!"
          )
          .required("비밀번호를 입력해주세요!"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
          .required("비밀번호 재입력을 입력해주세요!"),
      })
    ),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
  });

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{
        margin: "auto",
        paddingX: {
          xs: 2,
          sm: 4,
        },
        paddingY: {
          xs: 3,
          sm: 6,
        },
        maxWidth: "sm",
      }}
    >
      <Stack
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        <Typography variant="h5" align="center">
          회원가입
        </Typography>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="email"
              label="이메일 (Email)"
              variant="standard"
              fullWidth
              value={value || ""}
              error={!!error}
              helperText={error?.message}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="password"
              label="비밀번호 (Password)"
              variant="standard"
              fullWidth
              value={value || ""}
              error={!!error}
              helperText={error?.message}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="password"
              label="비밀번호 재확인 (Confirm Password)"
              variant="standard"
              fullWidth
              value={value || ""}
              error={!!error}
              helperText={error?.message}
              onChange={onChange}
            />
          )}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          fullWidth
          loading={false /* isLoading */}
        >
          회원가입
        </LoadingButton>
      </Stack>
    </Paper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context.req.headers.cookie) {
      store.dispatch(
        api.endpoints.getMyInfo.initiate(context.req.headers.cookie || "")
      );
      await Promise.all(api.util.getRunningOperationPromises());
    }
    return {
      props: {},
    };
  }
);

export default SignUpPage;

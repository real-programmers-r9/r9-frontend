import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGEXP_PASSWORD } from "src/libs/constants/regexp";

export interface ISignInFormFields {
  email: string;
  password: string;
}

const signInFormSchema: yup.SchemaOf<ISignInFormFields> = yup.object().shape({
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
});

export const SignInForm = () => {
  const { handleSubmit, control } = useForm<ISignInFormFields>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit = handleSubmit((value) => {
    console.log(value);
  });

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            onChange={onChange}
            value={value || ""}
            margin="normal"
            fullWidth
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            onChange={onChange}
            value={value || ""}
            margin="normal"
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            autoComplete="current-password"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ my: 2 }}
      >
        로그인
      </Button>
    </Box>
  );
};

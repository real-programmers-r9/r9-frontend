import React from "react";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGEXP_PASSWORD } from "src/libs/constants/regexp";

export interface ISignUpFormFields {
  email: string;
  password: string;
  confirmPassword: string;
  term: boolean;
  privacy: boolean;
  adult: boolean;
}

const signUpFormSchema: yup.SchemaOf<ISignUpFormFields> = yup.object().shape({
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
  term: yup.bool().oneOf([true]).required(),
  privacy: yup.bool().oneOf([true]).required(),
  adult: yup.bool().oneOf([true]).required(),
});

export const SignUpForm = () => {
  const { handleSubmit, control } = useForm<ISignUpFormFields>({
    resolver: yupResolver(signUpFormSchema),
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
            label="비밀번호"
            type="password"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            onChange={onChange}
            value={value || ""}
            margin="normal"
            fullWidth
            label="비밀번호 재 확인"
            type="password"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Grid>
        <Grid item>
          <Controller
            control={control}
            name="term"
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) => onChange(event.target.checked)}
                    checked={value || false}
                  />
                }
                label="서비스 이용약관"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            control={control}
            name="privacy"
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) => onChange(event.target.checked)}
                    checked={value || false}
                  />
                }
                label="개인정보 이용약관"
              />
            )}
          />
        </Grid>
        <Grid item>
          <Controller
            control={control}
            name="adult"
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(event) => onChange(event.target.checked)}
                    checked={value || false}
                  />
                }
                label="만 18세 이상입니다."
              />
            )}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ my: 2 }}
      >
        회원가입
      </Button>
    </Box>
  );
};

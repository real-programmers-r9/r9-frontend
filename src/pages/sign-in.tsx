import React from "react";
import { NextPage } from "next";
import { Typography, Card } from "@mui/material";
import { SignInForm } from "src/components/forms/SignInForm";
import { useRouter } from "next/router";

const SignInPage: NextPage = () => {
  const router = useRouter();

  return (
    <Card
      sx={{
        marginTop: 2,
        maxWidth: "sm",
        marginX: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <SignInForm />
      <Typography onClick={() => router.push("/")}>
        비밀번호를 잊었나요?
      </Typography>
    </Card>
  );
};

export default SignInPage;

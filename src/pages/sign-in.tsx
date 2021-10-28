import React from "react";
import { NextPage } from "next";
import { Typography, Link, Card } from "@mui/material";
import { SignInForm } from "src/components/forms/SignInForm";

const SignInPage: NextPage = () => {
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
      <Link href="/#" variant="body2">
        비밀번호를 잊었나요?
      </Link>
    </Card>
  );
};

export default SignInPage;

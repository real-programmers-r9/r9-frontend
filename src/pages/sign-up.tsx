import React from "react";
import { NextPage } from "next";
import { Card, Typography } from "@mui/material";
import { SignUpForm } from "src/components/forms/SignUpForm";

const SignUpPage: NextPage = () => {
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
        회원가입
      </Typography>
      <SignUpForm />
    </Card>
  );
};

export default SignUpPage;

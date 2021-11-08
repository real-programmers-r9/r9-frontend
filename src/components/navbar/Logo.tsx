import React from "react";
import { useRouter } from "next/router";
import { Animation } from "@mui/icons-material";

export const Logo = () => {
  const router = useRouter();

  return (
    <Animation onClick={() => router.push("/")} sx={{ cursor: "pointer" }} />
  );
};

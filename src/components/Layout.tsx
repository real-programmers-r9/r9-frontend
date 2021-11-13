import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Navbar } from "./navbar/Navbar";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: grey[100],
      }}
    >
      <Navbar />
      <Container
        sx={{
          paddingY: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

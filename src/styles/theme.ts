import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 450, md: 900, lg: 1200, xl: 1536 },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "'Segoe UI'",
      "Roboto",
      "'Helvetica Neue'",
      "Arial",
      "sans-serif",
      "'Apple Color Emoji'",
      "'Segoe UI Emoji'",
      "'Segoe UI Symbol'",
    ].join(", "),
    h6: {
      fontWeight: "bold",
      color: "#454443",
      margin: 5,
    },
    subtitle2: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#41ba6c",
      dark: "#212121",
    },
    secondary: {
      main: "#6c8cc4",
    },
  },
});

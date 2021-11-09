import { createTheme } from "@mui/material";
import { blue, grey, teal } from "@mui/material/colors";

export const theme = createTheme({
  // breakpoints: {
  //   values: { xs: 0, sm: 420, md: 765, lg: 1200, xl: 1536 },
  // },
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
    },
    h5: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
    subtitle2: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      // 메인컬러 test중
      main: teal[300],
      dark: teal[500],
      contrastText: grey[50],
      // main: lightGreen[400],
      // dark: green[400],
      // contrastText: grey[100],
    },
    secondary: {
      main: blue[300],
      dark: blue[700],
      contrastText: grey[100],
    },
  },
});

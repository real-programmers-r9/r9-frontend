import { createTheme } from "@mui/material/styles"; //코어에서!!

export const theme = createTheme({
  palette: {
    primary: {
      main: "#41ba6c",
      dark: "#212121",
    },
    secondary: {
      main: "#6c8cc4",
    },
  },
  typography: {
    h6: {
      fontWeight: "bold",
    },
    subtitle1: {},
  },
});

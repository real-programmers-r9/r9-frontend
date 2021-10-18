import { Theme, createTheme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

// example
const theme = createTheme({
  palette: {
    common: {
      black: '#19192B',
      white: '#ffffff',
    },
    primary: {
      light: '#2380a8',
      main: '#1266c7',
      dark: '#bbbb',
      contrastText: '#fffff',
    },
    secondary: {
      main: '#f4a199', // omitting light and dark will calculate from main
      contrastText: '#757575',
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#909090',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#48cfad',
      contrastText:"#fffff"
    },
    error: {
      main: '#832838',
    },
    background: {
      default: '#fff',
    },
  },

  typography: {
    fontFamily: 'Roboto',
    h4:{
      fontWeight:800
    },
    h6:{
      fontWeight:800
    },
    subtitle1:{
      fontWeight:800,
      textAlight:"left",
      marginTop:5
    },
    button:{
      fontWeight:800,
    }

  },
});

export default theme;

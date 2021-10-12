import { createTheme } from '@material-ui/core/styles';

// example
const theme = createTheme({
  palette: {
    common: {
      black: '#19192B',
      white: '#ffffff',
    },
    primary: {
      light: '#4FC1E9',
      main: '#1f87bf',
      dark: '#0288D1',
      contrastText: '#212121',
    },
    secondary: {
      main: '#f4a199', // omitting light and dark will calculate from main
      contrastText: '#757575',
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#79797a',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#48cfad',
    },
    error: {
      main: '#832838',
    },
  },

  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.paper,
    padding: '8px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '5px 10px',
  },
  cardContent: { flexGrow: 1 },
}));

export default useStyles;

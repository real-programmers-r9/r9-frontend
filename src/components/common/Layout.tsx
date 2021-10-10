import { Box } from '@mui/material';
import Navbar from './Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: 'sm',
        marginX: 'auto',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ mt: { xs: 9, sm: 10 } }}>{children}</Box>
    </Box>
  );
};

export default Layout;

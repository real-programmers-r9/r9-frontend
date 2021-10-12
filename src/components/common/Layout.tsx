import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleDrawer = (openStatus: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsSidebarOpen(openStatus);
  };

  return (
    <Container
      sx={{
        position: 'relative',
        maxWidth: 'sm',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <Box sx={{ mt: { xs: 9, sm: 10 } }}>{children}</Box>
    </Container>
  );
};

export default Layout;

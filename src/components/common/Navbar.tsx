import React from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

interface INabarProps {
  toggleOpen: () => void;
}

const Navbar = ({ toggleOpen }: INabarProps) => {
  const router = useRouter();

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
          Logo
        </Typography>
        <IconButton size="large" onClick={toggleOpen}>
          <Menu sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

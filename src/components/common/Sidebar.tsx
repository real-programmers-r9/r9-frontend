import React from 'react';
import Link from 'next/link';
import { Drawer, ListItem, ListItemIcon, ListItemText, List, Box } from '@mui/material';
import { Login, PersonAdd } from '@mui/icons-material';

interface ISidebarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface IMenuItem {
  icon: JSX.Element;
  display: string;
  href: string;
}

const menuItems: IMenuItem[] = [
  {
    icon: <Login />,
    display: '로그인',
    href: 'sign-in',
  },
  {
    icon: <PersonAdd />,
    display: '회원가입',
    href: 'sign-up',
  },
];

const Sidebar = ({ isOpen, toggleOpen }: ISidebarProps) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleOpen}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleOpen}>
        <List>
          {menuItems.map(item => (
            <Link key={item.href} href={item.href} passHref>
              <ListItem key={item.href} button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.display} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  Drawer,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@mui/material";
import { Menu, Animation, Login, PersonAdd } from "@mui/icons-material";
import { theme } from "src/styles/theme";
import useToggle from "src/hooks/useToggle";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactElement;
}

const navItems: NavItem[] = [
  { name: "로그인", href: "signin", icon: <Login /> },
  { name: "회원가입", href: "signup", icon: <PersonAdd /> },
];

const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, toggleOpen] = useToggle();

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <IconButton color="inherit" onClick={() => router.push("/")}>
            <Animation />
          </IconButton>
        </Link>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleOpen}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={isOpen} onClose={toggleOpen}>
              <Box sx={{ width: 250 }}>
                <List>
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <ListItemButton onClick={toggleOpen}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => router.push(item.href)}
                color="inherit"
              >
                {item.name}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

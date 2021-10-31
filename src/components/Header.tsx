import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu, Login, PersonAdd } from "@mui/icons-material";
import { theme } from "../theme";
import { useToggle } from "../hooks/useToggle";

interface MenuItem {
  name: string;
  href: string;
  icon: ReactElement;
}

const menuList: MenuItem[] = [
  {
    name: "로그인",
    href: "signin",
    icon: <Login />,
  },
  {
    name: "회원가입",
    href: "signup",
    icon: <PersonAdd />,
  },
];

export const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, toggleOpen] = useToggle();

  const handleMenu = (href: string) => {
    toggleOpen();
    router.push(href);
  };

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer" }}
        >
          R9
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleOpen}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={isOpen} onClose={toggleOpen}>
              <Box sx={{ width: 250 }}>
                <List>
                  {menuList.map((item) => (
                    <ListItem
                      key={item.name}
                      color="inherit"
                      onClick={() => handleMenu(item.href)}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {menuList.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                onClick={() => router.push(item.href)}
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

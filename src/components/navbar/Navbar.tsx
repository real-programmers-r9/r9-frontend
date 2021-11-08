import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Stack,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu, Login, PersonAdd, Logout, Home } from "@mui/icons-material";
import { useSignOutMutation } from "~/redux/services/api";
import { selectAuth } from "~/redux/slices/auth-slice";
import { theme } from "~/styles/theme";
import { useToggle } from "~/hooks/useToggle";
import { Logo } from "~/components/navbar/Logo";
import { UserInfo } from "~/components/navbar/UserInfo";

export interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactElement;
}

export const navItems: NavItem[] = [{ name: "홈", href: "/", icon: <Home /> }];

export const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, toggleOpen] = useToggle();
  const { user } = useSelector(selectAuth);
  const [signOutMutation] = useSignOutMutation();

  const handleClickSignOut = React.useCallback(async () => {
    await signOutMutation()
      .unwrap()
      .then(() => router.push("/"));
    toggleOpen();
  }, [router, signOutMutation, toggleOpen]);

  const handleClickMenuLink = React.useCallback(
    (href: string) => {
      router.push(href);
      toggleOpen();
    },
    [router, toggleOpen]
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack
          width="100%"
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={toggleOpen}
                sx={{ marginLeft: "auto" }}
              >
                <Menu />
              </IconButton>
              <Drawer anchor="right" open={isOpen} onClose={toggleOpen}>
                <Box
                  sx={{
                    width: 250,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <List>
                    {navItems.map(({ name, href, icon }) => (
                      <ListItemButton
                        key={name}
                        onClick={() => router.push(href)}
                      >
                        {icon ?? <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText>{name} </ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                  <List>
                    {user ? (
                      <>
                        <ListItem
                          onClick={() => handleClickMenuLink("/myinfo")}
                        >
                          <UserInfo user={user} />
                        </ListItem>
                        <ListItemButton onClick={handleClickSignOut}>
                          <ListItemIcon>
                            <Logout />
                          </ListItemIcon>
                          <ListItemText>로그아웃</ListItemText>
                        </ListItemButton>
                      </>
                    ) : (
                      <>
                        <ListItemButton
                          onClick={() => handleClickMenuLink("/auth/signin")}
                        >
                          <ListItemIcon>
                            <Login />
                          </ListItemIcon>
                          <ListItemText>로그인</ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          onClick={() => handleClickMenuLink("/auth/signup")}
                        >
                          <ListItemIcon>
                            <PersonAdd />
                          </ListItemIcon>
                          <ListItemText>회원가입</ListItemText>
                        </ListItemButton>
                      </>
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Stack
                spacing={2}
                flexGrow={1}
                direction="row"
                justifyContent="flex-start"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    color="inherit"
                    onClick={() => router.push(item.href)}
                  >
                    {item.name}
                  </Button>
                ))}
              </Stack>
              <Stack spacing={2} direction="row">
                {user ? (
                  <UserInfo user={user} />
                ) : (
                  <>
                    <Button
                      color="inherit"
                      onClick={() => router.push("/auth/signin")}
                    >
                      로그인
                    </Button>
                    <Button
                      color="inherit"
                      onClick={() => router.push("/auth/signup")}
                    >
                      회원가입
                    </Button>
                  </>
                )}
              </Stack>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

import React, { useCallback } from "react";
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
  Avatar,
  ListItemAvatar,
  ListItem,
  Typography,
} from "@mui/material";
import {
  Menu,
  Animation,
  Login,
  PersonAdd,
  Home,
  Logout,
} from "@mui/icons-material";
import { theme } from "src/styles/theme";
import useToggle from "src/hooks/useToggle";
import { useSelector } from "react-redux";
import { selectAuth } from "src/redux/slices/auth-slice";
import { usePostSignOutMutation } from "src/redux/services/api";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactElement;
}

export interface NavMenuItem extends NavItem {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

// 메뉴 추가할때 여기 배열에 추가
const navItems: NavItem[] = [{ name: "홈", href: "/", icon: <Home /> }];

const NavMenuLinkItem = ({ name, href, icon, onClick }: NavMenuItem) => (
  <Link href={href} passHref>
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </ListItemButton>
  </Link>
);

const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, toggleOpen] = useToggle();
  const { user } = useSelector(selectAuth);
  const [postSignOut] = usePostSignOutMutation();

  const handleClickSignOut = useCallback(async () => {
    await postSignOut(null)
      .unwrap()
      .then(() => router.push("/"));
    toggleOpen();
  }, [postSignOut, router, toggleOpen]);

  const handleClickMyInfo = useCallback(() => {
    router.push("/myinfo");
    toggleOpen();
  }, [router, toggleOpen]);

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#212121",
        }}
      >
        <Link href="/" passHref>
          <IconButton color="inherit" onClick={() => router.push("/")}>
            <Animation />
          </IconButton>
        </Link>
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
                  {navItems.map((item) => (
                    <NavMenuLinkItem
                      key={item.name}
                      name={item.name}
                      href={item.href}
                      icon={item.icon}
                      onClick={toggleOpen}
                    />
                  ))}
                </List>
                <List>
                  {user ? (
                    <>
                      <ListItem onClick={handleClickMyInfo}>
                        <ListItemAvatar>
                          <Avatar alt="profile" variant="rounded" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={user.name}
                          secondary={user.email}
                        />
                      </ListItem>
                      <NavMenuLinkItem
                        name="로그아웃"
                        href="/signup"
                        icon={<Logout />}
                        onClick={handleClickSignOut}
                      />
                    </>
                  ) : (
                    <>
                      <NavMenuLinkItem
                        name="로그인"
                        href="/signin"
                        icon={<Login />}
                        onClick={toggleOpen}
                      />
                      <NavMenuLinkItem
                        name="회원가입"
                        href="/signup"
                        icon={<PersonAdd />}
                        onClick={toggleOpen}
                      />
                    </>
                  )}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              {user ? (
                <>
                  <Box sx={{ display: "flex" }}>
                    <Avatar alt="profile" variant="rounded" />
                    <Box sx={{ marginLeft: 1 }}>
                      <Typography variant="body2">{user.name}</Typography>
                      <Typography variant="body2">{user.email}</Typography>
                    </Box>
                    <Button color="inherit" onClick={handleClickSignOut}>
                      로그아웃
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Button
                    color="inherit"
                    onClick={() => router.push("/signin")}
                  >
                    로그인
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => router.push("/signup")}
                  >
                    회원가입
                  </Button>
                </>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

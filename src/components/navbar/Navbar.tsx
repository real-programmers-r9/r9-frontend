import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
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
import {
  Menu,
  Login,
  PersonAdd,
  Logout,
  Home,
  Comment,
} from "@mui/icons-material";
import { usePostAuthSignOutMutation } from "~/redux/services/api";
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

// styled background-added
const StyledToolbar = styled(Toolbar)({
  // background: "linear-gradient(153deg, rgba(147,221,227,1) 8%, rgba(147,232,175,1) 74%, rgba(201,251,126,1) 100%)",
});

export const navItems: NavItem[] = [
  { name: "R9", href: "/", icon: <Home /> },
  { name: "알바 후기", href: "/jobs/reviews", icon: <Comment /> },
];
export const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, toggleOpen] = useToggle();
  const { user } = useSelector(selectAuth);
  const [postAuthSignOutMutation] = usePostAuthSignOutMutation();

  const handleClickSignOut = React.useCallback(async () => {
    await postAuthSignOutMutation()
      .unwrap()
      .then(() => router.push("/"));
    toggleOpen();
  }, [router, postAuthSignOutMutation, toggleOpen]);

  const handleClickMenuLink = React.useCallback(
    (href: string) => {
      router.push(href);
      toggleOpen();
    },
    [router, toggleOpen]
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Stack
          width="100%"
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          {isMobile ? (
            //모바일 버전
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
                        <ListItemIcon>{icon}</ListItemIcon>
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
            //pc 버전
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
      </StyledToolbar>
    </AppBar>
  );
};

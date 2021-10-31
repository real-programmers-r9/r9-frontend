import React from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/system";
import AnimationIcon from "@mui/icons-material/Animation";

interface INabarProps {
  toggleOpen: () => void;
}

const Navbar = ({ toggleOpen }: INabarProps) => {
  const router = useRouter();

  return (
    <AppBar elevation={0} position="fixed">
      <ToolBar>
        <LogoBox onClick={() => router.push("/")}>
          <AnimationIcon />
          <LogoText>시니어 알바앱 R9</LogoText>
        </LogoBox>
        {/* web:button groups */}
        <div>
          <Buttons>
            <TopButton>로그인</TopButton>
            <TopButton sx={{ background: "#ed8545", color: "#fff" }}>
              회원가입
            </TopButton>
          </Buttons>
          {/* mobile: 햄버거 */}
          <BurgerIcon size="large" onClick={toggleOpen}>
            <Menu />
          </BurgerIcon>
        </div>
      </ToolBar>
    </AppBar>
  );
};

export default Navbar;

//styles
const ToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  color: "#212121",
  background: "#eee",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LogoBox = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "#41ba6c",
  "&:hover": {
    color: "#212121",
  },
});

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  display: "none",
  fontWeight: 700,
  color: "#212121",
  marginTop: 10,
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const Buttons = styled("div")(({ theme }) => ({
  alignItems: "center",
  marginRight: 5,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const BurgerIcon = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const TopButton = styled(Button)({
  border: "1px solid #ddd",
  borderRadius: 5,
  marginRight: 5,
  color: "#212121",
  width: 80,
  "&:hover": {
    color: "#212121",
    background: "#fff",
    transform: "scale(1.05)",
  },
});

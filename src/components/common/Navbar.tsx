import React from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/system";

interface INabarProps {
  toggleOpen: () => void;
}

const Navbar = ({ toggleOpen }: INabarProps) => {
  const router = useRouter();

  return (
    <AppBar elevation={0} position="fixed">
      <ToolBar>
        <Typography
          variant="h5"
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          Senior alba app
        </Typography>
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
  background: "#fff",
  justifyContent: "space-between",
  alignItems: "center",
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
    background: "#bbb",
  },
});

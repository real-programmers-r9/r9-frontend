import { NextPage } from "next";
import {
  Typography,
  Button,
  Grid,
  Paper,
  Container,
  Link,
} from "@mui/material";
import { AccountCircle, ShoppingBag } from "@mui/icons-material";

const SignUpTypePage: NextPage = () => {
  return (
    <Container
      sx={{
        width: 380,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography align="center" mb={3} variant="h4">
        회원가입
      </Typography>
      <Typography color="grey.700" align="center" mb={3} variant="h6">
        회원 유형을 선택해 주세요
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            sx={{
              background: "#f5f5f5",
              paddingBottom: 8,
              textAlign: "center",
            }}
          >
            <ShoppingBag style={{ marginTop: 50, fontSize: 80 }} />
            <Typography align="center" mb={3} variant="h6">
              기업
            </Typography>
            <Button
              size="small"
              sx={{ background: "#f9e000", width: 140, padding: 1 }}
              variant="contained"
            >
              카카오 회원가입
            </Button>

            <Link sx={{ textDecoration: "none" }} href="/login">
              <Button
                size="small"
                sx={{ width: 140, padding: 1, color: "#ffff", marginTop: 1 }}
                variant="contained"
              >
                이메일 회원가입
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            sx={{
              background: "#f5f5f5",
              paddingBottom: 8,
              textAlign: "center",
            }}
          >
            <AccountCircle style={{ marginTop: 50, fontSize: 80 }} />
            <Typography align="center" mb={3} variant="h6">
              개인
            </Typography>
            <Button
              size="small"
              sx={{ background: "#f9e000", width: 140, padding: 1 }}
              variant="contained"
            >
              <Typography variant="button">카카오 회원가입</Typography>
            </Button>

            <Link sx={{ textDecoration: "none" }} href="/login">
              <Button
                size="small"
                sx={{ width: 140, padding: 1, color: "#ffff", marginTop: 1 }}
                variant="contained"
              >
                이메일 회원가입
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpTypePage;

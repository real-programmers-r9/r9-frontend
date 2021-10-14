import { Typography, Button, Grid, Paper, Container, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { PanoramaPhotosphere } from '@mui/icons-material';

const loginType: React.FC = () => {
  return (
    <Container
      sx={{
        width: 380,
        height: 680,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography align="center" mb={3} variant="h4">
        회원가입
      </Typography>
      <Typography color="grey.700" align="center" mb={3} variant="h6">
        회원 유형을 선택해 주세요
      </Typography>

      <Grid container spacing={2}>
        {/* 컴포넌트명:userTypeBox */}
        <Grid item xs={6}>
          <Paper sx={{ background: '#f5f5f5', paddingBottom: 2, textAlign: 'center' }}>
            <ShoppingBagIcon style={{ fontSize: 50, marginTop: 10 }} />
            <Typography align="center" mb={3} variant="h6">
              기업
            </Typography>
            {/* buttons */}
            <Button
              size="small"
              sx={{ background: '#f9e000', width: 140, padding: 1 }}
              variant="contained"
            >
              <Typography variant="button">카카오 회원가입</Typography>
            </Button>

            <Link sx={{ textDecoration: 'none' }} href="/login">
              <Button
                mt={2}
                size="small"
                sx={{ width: 140, padding: 1, color: '#ffff', marginTop: 1 }}
                variant="contained"
              >
                <Typography variant="button">이메일 회원가입</Typography>
              </Button>
            </Link>
          </Paper>
        </Grid>
        {/* 컴포넌트명:userTypeBox */}
        <Grid item xs={6}>
          <Paper sx={{ background: '#f5f5f5', paddingBottom: 2, textAlign: 'center' }}>
            <ShoppingBagIcon style={{ fontSize: 50, marginTop: 10 }} />
            <Typography align="center" mb={3} variant="h6">
              개인
            </Typography>
            {/* buttons */}
            <Button
              size="small"
              sx={{ background: '#f9e000', width: 140, padding: 1 }}
              variant="contained"
            >
              <Typography variant="button">카카오 회원가입</Typography>
            </Button>

            <Link sx={{ textDecoration: 'none' }} href="/login">
              <Button
                mt={2}
                size="small"
                sx={{ width: 140, padding: 1, color: '#ffff', marginTop: 1 }}
                variant="contained"
              >
                <Typography variant="button">이메일 회원가입</Typography>
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default loginType;

// import * as React from 'react';
import { useStyles } from '../styles/loginStyle';
import Visibility from '@mui/icons-material/Visibility';
import {
  Paper,
  Button,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Link,
  Divider,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';

const login: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
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
        <Typography align="center" mb={5} variant="h4">
          로그인
        </Typography>

        <FormControl m={2} sx={{ width: 280 }}>
          <Typography variant="subtitle1" gutterBottom>
            이메일 주소
          </Typography>
          <OutlinedInput
            sx={{ border: '1px solid #eee' }}
            id="outlined-adornment-password"
            type="email"
            label="email"
          />
        </FormControl>

        <FormControl sx={{ width: 280 }}>
          <Typography variant="subtitle1" gutterBottom>
            비밀번호
          </Typography>
          <OutlinedInput
            sx={{ border: '1px solid #eee' }}
            id="outlined-adornment-password"
            type="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {<Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button sx={{ width: 280, margin: 4, padding: 1.5 }} variant="contained">
          <Typography color="common.white" variant="h6">
            로그인
          </Typography>
        </Button>

        <Button sx={{ width: 280 }} variant="text">
          <Typography gutterButtom color="grey.700" variant="subtitle1">
            비밀번호 재설정
          </Typography>
        </Button>

        <Divider variant="middle" />

        <Button
          sx={{ background: '#f9e000', width: 280, margin: 2, padding: 1.5 }}
          variant="contained"
        >
          <Typography variant="h6">카카오 로그인</Typography>
        </Button>

        <Link sx={{ textDecoration: 'none' }} pt={4} href="/signup">
          <Typography variant="title1">아직 회원이 아니신가요?</Typography>
        </Link>
      </Container>
    </div>
  );
};

export default login;

// import * as React from 'react';
import { useStyles } from '../styles/loginStyle';
import Visibility from '@mui/icons-material/Visibility';
import dynamic from 'next/dynamic';
import {
  Container,
  Button,
  FormGroup,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  FormControl,
  Link,
  Checkbox,
  Card,
  IconButton,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';

// const PasswordBox = dynamic(() => import('../components/signup/pwBox'))

const signup: React.FC = () => {
  //const classes = useStyles();
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
          회원가입
        </Typography>

        <Typography align="left" variant="subtitle1" gutterBottom>
          이메일 주소
        </Typography>
        <FormControl m={2} sx={{ width: 280 }}>
          <OutlinedInput
            sx={{ border: '1px solid #eee' }}
            id="outlined-adornment-password"
            type="email"
            label="email"
          />
        </FormControl>

        <Typography align="left" variant="subtitle1" gutterBottom>
          비밀번호
        </Typography>

        <FormControl sx={{ width: 280 }}>
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

        <Button sx={{ width: 280, margin: 4, padding: 2 }} variant="contained">
          <Typography color="common.white" variant="h6">
            회원가입
          </Typography>
        </Button>
        {/* <PasswordBox/> */}

        <Card sx={{ width: 300, marginBottom: 4 }}>
          <CardContent>
            <Typography align="left" variant="subtitle1" gutterBottom>
              약관 동의
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="이용약관 동의(필수)"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="개인정보 수집 및 이용동의"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="만 18세 이상입니다(필수)"
              />
              <Divider variant="middle" />
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="전체 동의"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default signup;


// import * as React from 'react';
import {useStyles} from '../styles/loginStyle';
import Visibility from '@mui/icons-material/Visibility';
import {  
  Paper,
  Button,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Link,
  IconButton,
  Typography} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';


const login: React.FC = () => {
  const classes = useStyles();
  return <div>
    <Paper sx={{ width:380, height:680, display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

    <Typography align="center" mb={5} variant="h4" >로그인</Typography>

<Typography  variant="subtitle1"gutterBottom >이메일 주소</Typography>
<FormControl m={2} sx={{ width: 280}}>

          <OutlinedInput sx={{border:"1px solid #eee"}}

            id="outlined-adornment-password"
            type="email"
            label="email"
          />
        </FormControl>
        <Typography  variant="subtitle1" gutterBottom>비밀번호</Typography>

<FormControl sx={{width: 280}}>

          <OutlinedInput sx={{border:"1px solid #eee"}}

            id="outlined-adornment-password"
            type="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  { <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />  
        </FormControl>
<Button sx={{ width: 280, margin:4,padding:2}} variant="contained">
  <Typography color="common.white" variant="h6" >로그인</Typography>
  </Button>

<Button sx={{ width: 280}} variant="text">
  <Typography variant="subtitle1" >비밀번호 재설정</Typography>
</Button>

<Typography color="grey.700" p={2} variant="subtitle1" >소셜 로그인</Typography>

<Button mb={4} sx={{ background:"#f9e000",width: 280,padding:2}} variant="contained">
  <Typography variant="h6" >카카오 로그인</Typography>
  </Button>


<Link pt={4} href="/signup"><Typography color="grey.700" sx={{textDecoration: 'none'}} variant="title" >아직 회원이 아니신가요?</Typography>
</Link>

</Paper>
  </div>;
};

export default login;

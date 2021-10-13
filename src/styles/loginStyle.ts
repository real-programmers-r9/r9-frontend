// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
 
    bigBtn: {
    maxWidth: 280,
    height: 210,
    margin: 3,
    marginRight: 10
  },

  text: {
    
  },
  textField:{
    border:"1px solid #212121"
  }
});


// <Box sx={{ width:300, height:400, display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className={classes.container}>


// <Typography mb={5} sx={{fontWeight: 800}}variant="h4" >로그인</Typography>

// <Typography align="left" sx={{fontWeight: 800}}variant="title1" >이메일 주소</Typography>
// <FormControl sx={{ width: 280 ,margin:1}}>

//       <OutlinedInput sx={{border:"1px solid #eee"}}

//         id="outlined-adornment-password"
//         type="email"
//         label="email"
//       />
//     </FormControl>
//     <Typography align="left" sx={{fontWeight: 800}} variant="title1" >비밀번호</Typography>
// <FormControl mb={2} sx={{ width: 280,margin:1}}>

//       <OutlinedInput sx={{border:"1px solid #eee"}}

//         id="outlined-adornment-password"
//         type="password"
//         label="Password"
//       />
//     </FormControl>


// <Button sx={{ width: 280, padding:1.5}} variant="contained"><Typography sx={{color:"#fff",fontWeight: 800}}variant="h6" >로그인</Typography></Button>

// <Button sx={{ width: 280,margin:2}} variant="text"><Typography sx={{fontWeight: 800}} variant="title" >비밀번호 재설정</Typography></Button>
// <Typography color="light" sx={{fontWeight: 800, padding:2}} variant="h6" >소셜 로그인</Typography>


// <Button sx={{background:"#f9e000", width: 260, padding:1.5}} variant="contained"><Typography sx={{fontWeight: 800}}variant="h6" >카카오 로그인</Typography></Button>

// <Link pt={4} href="#"><Typography sx={{fontWeight: 700,color:"#212121",textDecoration: 'none'}} variant="title" >아직 회원이 아니신가요?</Typography></Link>
//      </Box>
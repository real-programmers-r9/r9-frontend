import Link from 'next/link';
import { Box, Stack, Drawer, Typography, IconButton, Button } from '@mui/material';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface ISidebarProps {
  isSidebarOpen: boolean;
  toggleDrawer: any;
}

const Sidebar = ({ isSidebarOpen, toggleDrawer }: ISidebarProps): JSX.Element => {
  const isUserLoggedIn = false;

  return (
    <Drawer anchor="right" open={isSidebarOpen} onClose={toggleDrawer(false)}>
      {isUserLoggedIn ? (
        <div>hello</div>
      ) : (
        <>
          <IconButton sx={{ justifyContent: 'start' }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 1,
              width: { xs: 180, sm: 250 },
            }}
          >
            <Stack onClick={toggleDrawer(false)}>
              <Link href="/login" passHref>
                <Button variant="text" sx={{ fontSize: 20 }}>
                  로그인
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="text" sx={{ fontSize: 20 }}>
                  회원가입
                </Button>
              </Link>
            </Stack>
            <Stack sx={{ pb: 2 }}>
              <Stack direction="row" alignItems="center" sx={{ mx: 'auto' }}>
                <IconButton sx={{ justifyContent: 'start' }}>
                  <RemoveIcon />
                </IconButton>
                <Typography color="primary" sx={{ fontSize: 20, fontWeight: 500 }}>
                  글자크기
                </Typography>
                <IconButton sx={{ justifyContent: 'start' }}>
                  <AddIcon />
                </IconButton>
              </Stack>
              <Button variant="text" sx={{ fontSize: 20 }}>
                <ChatOutlinedIcon />
                문의하기
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Drawer>
  );
};

export default Sidebar;

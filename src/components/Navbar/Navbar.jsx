import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material'; //
import {
  NavMobile,
  NavMenuDesktop,
  Logo,
  SwitchButton,
} from '../../components';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const isMobile = window.innerWidth < 900; // Use this for testing

  return (
    <AppBar
      component='nav'
      sx={{
        bgcolor: theme.palette.mode === 'light' ? '#FFF' : '#13131A',
        zIndex: '2000',
        px: isMobile ? '0' : '78px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px 0px',
      }}
      position='fixed'
      elevation={0}
    >
      <Toolbar sx={{ height: '70px' }}>
        {isMobile ? (
          <NavMobile />
        ) : (
          <>
            <Logo />
            <NavMenuDesktop />
            <SwitchButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

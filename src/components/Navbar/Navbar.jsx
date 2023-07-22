import { useContext } from 'react';
import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';

import {
  NavMobile,
  NavMenuDesktop,
  Logo,
  SwitchButton,
} from '../../components';
import { ColorModeContext } from '../../Utils/ColorMode';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const isMobile = window.innerWidth < 900; // Use this for testing
  const { isDarkMode, toggleDarkMode } = useContext(ColorModeContext);

  return (
    <AppBar
      component='nav'
      sx={{
        bgcolor: 'customColor.navBarBg',
        zIndex: '2000',
        px: isMobile ? '0' : '78px',
        boxShadow: '0px 0px 1px 0px #92929D',
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
            <SwitchButton checkMode={isDarkMode} changeMode={toggleDarkMode} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

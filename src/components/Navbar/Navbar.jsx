import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import {
  NavMobile,
  NavMenuDesktop,
  Logo,
  SwitchButton,
} from '../../components';
import { toggleMode } from '../../slice/darkMode';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.value);
  const handleToggleDarkMode = () => {
    dispatch(toggleMode());
  };

  return (
    <AppBar
      component='nav'
      sx={{
        bgcolor: 'customColor.navBarBg',
        zIndex: '2000',
        maxWidth: '100%',
        margin: '0 auto',
        boxShadow: '0px 0px 1px 0px #92929D',
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          height: '70px',
          width: '100%',
          maxWidth: '1470px',
          padding: isMobile ? '0 2.5%' : '0 5% !important',
          margin: '0 auto',
        }}
      >
        {isMobile ? (
          <NavMobile />
        ) : (
          <>
            <Logo />
            <NavMenuDesktop />
            <SwitchButton checkMode={mode} onChange={handleToggleDarkMode} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

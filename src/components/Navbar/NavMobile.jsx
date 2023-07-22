import { useState, useContext } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  IconButton,
  AppBar,
  Toolbar,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import icons from './../../assets/icons';
import { navMenuItems } from '../../constants';
import { Logo, SwitchButton } from '../../components';
import { ColorModeContext } from '../../Utils/ColorMode';

const NavMobile = ({ isMobile }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ColorModeContext);

  const handleDrawer = () =>
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

  return (
    <>
      {/* Mobile Drawer (nav menu that slides in from right on mobile) */}
      <Drawer
        variant='temporary'
        anchor='right'
        open={isDrawerOpen}
        onClose={handleDrawer}
        role='dialog'
        PaperProps={{
          sx: {
            width: '70%',
            bgcolor: 'customColor.navBarBg',
            backgroundImage: 'none',
          },
        }}
        BackdropProps={{
          sx: {
            bgcolor: 'customColor.backDrop',
          },
        }}
      >
        <List
          sx={{
            padding: '13px',
            my: 'auto',
          }}
        >
          {navMenuItems.map((menuItem, i) => (
            <ListItemButton
              component={NavLink}
              key={menuItem.link}
              to={menuItem.link}
              sx={{
                padding: '12px',
                lineHeight: '24px',
                borderRadius: '6px',
                color: 'text.secondary',
                fontFamily: '"Manrope", sans-serif',
                '&.active': {
                  bgcolor: 'customColor.activeDrawer',
                  color: 'primary.main',
                  fontWeight: 'bold',
                },
              }}
              aria-label={`Go to ${menuItem.name} page`}
            >
              {menuItem.name}
            </ListItemButton>
          ))}
          <Box sx={{ paddingLeft: '12px', marginTop: '36px' }}>
            <SwitchButton checkMode={isDarkMode} changeMode={toggleDarkMode} />
          </Box>
        </List>
      </Drawer>

      {/* Nav Mobile Top */}
      {!isDrawerOpen && (
        <IconButton
          onClick={handleDrawer}
          sx={{
            marginRight: 'auto',
          }}
        >
          <img
            src={icons.burgerMenu}
            alt='Mobile navigation hamburger icon'
            aria-label='Open Navigation Menu'
            data-testid='hamburger-icon'
          />
        </IconButton>
      )}

      {!isDrawerOpen ? (
        <SwitchButton checkMode={isDarkMode} changeMode={toggleDarkMode} />
      ) : (
        <AppBar
          component='nav'
          sx={{
            bgcolor: 'customColor.navBarBg',
          }}
          position='fixed'
          elevation={0}
        >
          <Toolbar
            sx={{
              height: '70px',
            }}
          >
            <Logo />
            <IconButton sx={{ marginLeft: 'auto' }}>
              <img
                style={{
                  width: '16px',
                  height: '16px',
                }}
                src={icons.closeIcon}
                alt='Mobile navigation close icon'
                onClick={handleDrawer}
                aria-label='Close Navigation Menu'
                data-testid='close-icon'
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default NavMobile;

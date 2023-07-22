import { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Box,
} from '@mui/material';

import { hamburger, closeIcon } from './../../assets/icons/index';
import { navMenuItems } from '../../constants';
import { Logo, SwitchButton } from '../../components';

const NavMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        PaperProps={{ sx: { width: '70%' } }}
        BackdropProps={{ sx: { bgcolor: 'rgba(0, 0, 0, 0.1)' } }}
      >
        <List
          sx={{
            padding: '13px',
            my: 'auto',
          }}
        >
          {navMenuItems.map((menuItem, i) => (
            <ListItemButton
              key={menuItem}
              onClick={handleDrawer}
              sx={{
                padding: '12px',
                lineHeight: '16px',
                bgcolor: i === 0 ? '#F4F4F4' : '',
                borderRadius: i === 0 ? '6px' : '',
                '&:selected': {
                  bgcolor: '#F4F4F4',
                  borderRadius: '6px',
                },
              }}
              aria-label={`Go to ${menuItem} page`}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    color: i === 0 ? 'primary.main' : '',
                  }}
                >
                  {menuItem}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <Box sx={{ paddingLeft: '12px', marginTop: '36px' }}>
            <SwitchButton />
          </Box>
        </List>
      </Drawer>

      {/* Nav Mobile Top */}
      {!isDrawerOpen && (
        <IconButton onClick={handleDrawer} sx={{ marginRight: 'auto' }}>
          <img
            src={hamburger}
            alt='Mobile navigation hamburger icon'
            aria-label='Open Navigation Menu'
            data-testid='hamburger-icon'
          />
        </IconButton>
      )}

      {!isDrawerOpen ? (
        <SwitchButton />
      ) : (
        <AppBar
          component='nav'
          sx={{
            bgcolor: 'white',
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
                style={{ width: '16px', height: '16px' }}
                src={closeIcon}
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

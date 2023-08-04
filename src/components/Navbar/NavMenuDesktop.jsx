import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { navMenuItems } from '../../constants';

const NavMenuDesktop = () => {
  const location = useLocation();
  const [activeTabValue, setActiveTabValue] = useState(
    getActiveTabValueFromPath(location.pathname)
  );

  function getActiveTabValueFromPath(pathname) {
    const activeIndex = navMenuItems.findIndex(
      (menuItem) => menuItem.link === pathname
    );
    return activeIndex !== -1 ? activeIndex : 0;
  }

  const handleTabChange = (_event, value) => {
    setActiveTabValue(value);
  };

  return (
    <Tabs
      value={activeTabValue}
      TabIndicatorProps={{
        style: {
          backgroundColor: 'primary',
        },
      }}
      sx={{ marginLeft: 'auto', marginRight: 'auto' }}
      onChange={handleTabChange}
    >
      {navMenuItems.map((menuItem) => (
        <Tab
          key={menuItem.name}
          label={menuItem.name}
          component={Link}
          to={menuItem.link}
          sx={{
            textTransform: 'capitalize',
            fontSize: '16px',
            height: '72px',
            padding: '0px',
            marginRight: '30px',
            lineHeight: '24px',
            color: 'secondary.contrastText',
            '&.Mui-selected': {
              color: '#0BAB7C',
            },
          }}
          aria-label={`Go to ${menuItem} page`}
        />
      ))}
    </Tabs>
  );
};

export default NavMenuDesktop;

import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

import { navMenuItems } from '../../constants';

const NavMenuDesktop = () => {
  const [activeTabValue, setActiveTabValue] = useState(0);

  return (
    <Tabs
      value={activeTabValue}
      TabIndicatorProps={{
        style: {
          backgroundColor: 'primary',
        },
      }}
      sx={{ marginLeft: 'auto', marginRight: 'auto' }}
      onChange={(_e, value) => setActiveTabValue(value)}
    >
      {navMenuItems.map((menuItem) => (
        <Tab
          key={menuItem}
          label={menuItem}
          component={Link}
          to={`/${menuItem
            .split(' ')
            .map((word) => word.toLowerCase())
            .join('-')}`}
          sx={{
            textTransform: 'capitalize',
            fontSize: '16px',
            height: '72px',
            padding: '0px',
            marginRight: '30px',
            lineHeight: '24px',
            color: '#92929D',
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

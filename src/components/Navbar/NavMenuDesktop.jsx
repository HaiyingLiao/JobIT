import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { navMenuItems } from '../../constants';

const NavMenuDesktop = () => {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
      TabIndicatorProps={{
        style: {
          backgroundColor: 'primary'
        }
      }}
      sx={{ marginLeft: 'auto', marginRight: 'auto' }}
    >
      {navMenuItems.map(menuItem => (
        <Tab
          key={menuItem.name}
          label={menuItem.name}
          component={Link}
          value={menuItem.link}
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
              color: '#0BAB7C'
            }
          }}
          aria-label={`Go to ${menuItem.name} page`}
        />
      ))}
    </Tabs>
  );
};

export default NavMenuDesktop;

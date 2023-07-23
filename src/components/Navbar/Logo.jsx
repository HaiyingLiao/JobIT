import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      sx={{
        height: '22px',
        display: 'flex',
        gap: '6px',
        padding: '2px 1px 0px 2px',
      }}
      data-testid='logo'
    >
      <Link to='/' aria-label='Go to Home Page'>
        <img
          style={{
            height: '20px',
          }}
          src='/logo-icon.png'
          alt='JobIt logo icon'
        />
      </Link>
      <Link to='/' aria-label='Go to Home Page'>
        <img
          style={{ height: '15px' }}
          src='/logo-text.png'
          alt='JobIt logo text'
        />
      </Link>
    </Box>
  );
};

export default Logo;

import { Typography } from '@mui/material';

const EstSalariesHeader = ({ isMobile }) => {
  return (
    <>
      <Typography component='header' variant={isMobile ? 'h4' : 'h1'} mb='12px'>
        Estimated Salaries
      </Typography>
      <Typography variant={isMobile ? 'bodyM_3' : 'h6'} color='text.secondary'>
        Monday, 13 Jan 2023
      </Typography>
    </>
  );
};

export default EstSalariesHeader;

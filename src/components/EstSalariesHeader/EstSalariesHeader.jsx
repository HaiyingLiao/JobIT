import { Typography } from '@mui/material';
import getDate from '../../Utils/getDate';

const EstSalariesHeader = ({ isMobile }) => {
  const date = getDate();
  return (
    <>
      <Typography component='header' variant={isMobile ? 'h4' : 'h1'} mb='12px'>
        Estimated Salaries
      </Typography>
      <Typography variant={isMobile ? 'bodyM_3' : 'h6'} color='text.secondary'>
        {date}
      </Typography>
    </>
  );
};

export default EstSalariesHeader;

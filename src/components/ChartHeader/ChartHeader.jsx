import { Typography } from '@mui/material';

const ChartHeader = ({ isMobile, title, location }) => {
  const typographyVariant = isMobile ? 'bodyM' : 'h2';
  return (
    <Typography
      component='header'
      sx={{
        fontSize: { sm: '1rem', md: '1.5rem' },
        fontWeight: '400',
        paddingLeft: isMobile ? '0' : '20px',
      }}
      mb='8px'
    >
      <Typography component='span' variant={typographyVariant}>
        Estimated Salary
      </Typography>
      &nbsp;for&nbsp;
      <Typography component='span' variant={typographyVariant}>
        {title}
      </Typography>
      &nbsp;in&nbsp;
      <Typography component='span' variant={typographyVariant}>
        {location}
      </Typography>
    </Typography>
  );
};

export default ChartHeader;

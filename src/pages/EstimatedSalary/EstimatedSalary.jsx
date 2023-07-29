import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';

import {
  Chart,
  EstSalariesForm,
  ChartLegend,
  ChartHeader,
  EstSalariesHeader,
} from '../../components';

const EstimatedSalary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const secondColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    bgcolor: 'customColor.jobCardBg',
    borderRadius: '10px',
    padding: '36px 0',
    marginTop: isMobile ? '0' : '45px',
  };

  return (
    <Box
      sx={{
        backgroundColor: 'customColor.pageBG',
        minHeight: '100vh',
        fontFamily: '"Manrope", sans-serif',
        padding: { xs: '80px 10px 80px 10px', lg: '120px 80px 0 80px' },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          padding: '20px 0 0 0',
          maxWidth: '90rem',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* First Column - Form */}
        <Grid item sm={6} xs={12} sx={{ padding: '40px' }}>
          <EstSalariesHeader isMobile={isMobile} />
          <EstSalariesForm isMobile={isMobile} />
        </Grid>

        {/* Second Column - Chart */}
        <Grid item sm={6} xs={12} sx={secondColumnStyles}>
          <ChartHeader isMobile={isMobile} />
          <ChartLegend isMobile={isMobile} />
          <Chart isMobile={isMobile} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimatedSalary;

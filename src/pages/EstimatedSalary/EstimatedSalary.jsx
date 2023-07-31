import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetEstimatedSalariesQuery } from '../../services/TMDB';

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
  const { data, error, isFetching } = useGetEstimatedSalariesQuery();
  console.log(data);

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' mt='20px'>
        <Typography variant='h4'>
          No movies that match that name.
          <br />
          Please searh for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';

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
        padding: { xs: '80px 20px 80px 20px', lg: '120px 80px 0 80px' },
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

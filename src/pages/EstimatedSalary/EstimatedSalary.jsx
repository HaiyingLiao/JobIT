import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useGetEstimatedSalariesQuery } from '../../services/JSearch';
import { fetchEstimatedSalaries } from '../../slice/currentEstimatedSalaries';

import {
  Chart,
  ChartLegend,
  ChartHeader,
  EstSalariesHeader,
} from '../../components';

const EstimatedSalary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const { title, location, radius } = useSelector((state) => {
    return state.currentEstimatedSalaries;
  });

  const { data, error, isFetching } = useGetEstimatedSalariesQuery({
    title,
    location,
    radius,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log({ data });

    dispatch(
      fetchEstimatedSalaries({
        name,
        value,
      })
    );
  };

  // if (isFetching) {
  //   return (
  //     <Box display='flex' justifyContent='center'>
  //       <CircularProgress size='4rem' />
  //     </Box>
  //   );
  // }

  // if (!data.results.length) {
  //   return (
  //     <Box display='flex' justifyContent='center' alignItems='center' mt='20px'>
  //       <Typography variant='h4'>No data found.</Typography>
  //     </Box>
  //   );
  // }

  // if (error) return 'An error has occured.';

  const secondColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    bgcolor: 'customColor.jobCardBg',
    borderRadius: '10px',
    padding: '36px 0',
    marginTop: isMobile ? '0' : '45px',
  };

  const textFieldStyles = {
    borderRadius: '12px',
    mt: '12px',
    bgcolor: 'customColor.toggleBtn',
  };

  const typographyVariant = isMobile ? 'bodyM3_2' : 'bodyM2_2';

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
          {/* Form */}
          <Grid
            container
            spacing={2}
            sx={{ pb: isMobile ? '0' : '38px', pt: '38px' }}
          >
            {/* Full-Width Input Box */}
            <Grid item xs={12}>
              <Typography
                variant={typographyVariant}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Job Title
              </Typography>
              <TextField
                name='title'
                variant='outlined'
                fullWidth
                placeholder='Senior User Experience Designer'
                sx={textFieldStyles}
                value={title}
                onChange={handleChange}
              />
            </Grid>
            {/* Two Column Input Boxes */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant={typographyVariant}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Location
              </Typography>
              <TextField
                variant='outlined'
                name='location'
                fullWidth
                placeholder='New-York, NY, USA'
                sx={textFieldStyles}
                value={location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={typographyVariant}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Radius
              </Typography>
              <TextField
                variant='outlined'
                name='radius'
                fullWidth
                placeholder='100'
                sx={textFieldStyles}
                value={radius}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column - Chart */}
        <Grid item sm={6} xs={12} sx={secondColumnStyles}>
          <ChartHeader isMobile={isMobile} />
          <ChartLegend isMobile={isMobile} />
          <Chart isMobile={isMobile} data={data} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimatedSalary;

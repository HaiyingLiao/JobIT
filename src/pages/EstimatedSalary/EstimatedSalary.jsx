import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  FormHelperText,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { useGetEstimatedSalariesQuery } from '../../services/JSearch';
import { setSalaryFormState } from '../../slice/currentEstimatedSalaries';
import {
  Chart,
  ChartLegend,
  ChartHeader,
  EstSalariesHeader,
} from '../../components';
import useDebounce from '../../Utils/debounce';

const EstimatedSalary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const { title, location, radius } = useSelector((state) => {
    return state.currentEstimatedSalaries;
  });

  const debouncedTitle = useDebounce(title, 500);
  const debouncedLocation = useDebounce(location, 500);
  const debouncedRadius = useDebounce(radius, 500);

  const { data, error, isFetching } = useGetEstimatedSalariesQuery(
    {
      title: debouncedTitle,
      location: debouncedLocation,
      radius: debouncedRadius,
    },
    { skip: !debouncedTitle || !debouncedLocation || !debouncedRadius }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setSalaryFormState({
        name,
        value,
      })
    );
  };

  // Common styles
  const secondColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    bgcolor: 'customColor.jobCardBg',
    borderRadius: '10px',
    padding: '36px 10px',
    marginTop: isMobile ? '0' : '45px',
  };

  const textFieldStyles = {
    borderRadius: '12px',
    mt: '12px',
    bgcolor: 'customColor.toggleBtn',
    border: '1px solid rgba(226, 226, 234, 0.60)',
  };

  return (
    <Box
      sx={{
        backgroundColor: 'customColor.pageBG',
        minHeight: '100vh',
        fontFamily: '"Manrope", sans-serif',
        padding: { xs: '80px 20px 80px 20px', lg: '120px 80px 120px 80px' },
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
        <Grid item sm={6} xs={12} sx={{ padding: isMobile ? '40px' : '85px' }}>
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
                color='secondary.contrastText'
                sx={{
                  lineHeight: '24px',
                  fontSize: isMobile ? '15px' : '14px',
                  fontWeight: '600',
                }}
              >
                Job Title
              </Typography>
              <TextField
                name='title'
                fullWidth
                placeholder='Project Manager'
                sx={textFieldStyles}
                InputProps={{
                  sx: {
                    px: '6px',
                    py: '4.5px',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '10px',
                  },
                }}
                value={title}
                onChange={handleChange}
              />
              <FormHelperText
                sx={{
                  bgcolor: 'customColor.pageBG',
                  color: '#FF0000',
                  mx: '0',
                  fontSize: '12px',
                }}
              >
                {debouncedTitle.length === 0 ? 'Please add a job title' : ''}
              </FormHelperText>
            </Grid>
            {/* Two Column Input Boxes */}
            <Grid item xs={12} sm={6}>
              <Typography
                color='secondary.contrastText'
                sx={{
                  lineHeight: '24px',
                  fontSize: isMobile ? '15px' : '14px',
                  fontWeight: '600',
                }}
              >
                Location
              </Typography>
              <TextField
                name='location'
                fullWidth
                placeholder='New York'
                sx={textFieldStyles}
                InputProps={{
                  sx: {
                    px: '6px',
                    py: '4.5px',
                    fontSize: isMobile ? '14px' : '13px',
                    fontWeight: isMobile ? '600' : '700',
                    borderRadius: '10px',
                  },
                }}
                value={location}
                onChange={handleChange}
              />
              <FormHelperText
                sx={{
                  bgcolor: 'customColor.pageBG',
                  color: '#FF0000',
                  mx: '0',
                  fontSize: '12px',
                }}
              >
                {debouncedLocation.length === 0 ? 'Please add a location' : ''}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                color='secondary.contrastText'
                sx={{
                  lineHeight: '24px',
                  fontSize: isMobile ? '15px' : '14px',
                  fontWeight: '600',
                }}
              >
                Radius
              </Typography>
              <TextField
                type='number'
                name='radius'
                fullWidth
                placeholder='30'
                sx={textFieldStyles}
                InputProps={{
                  sx: {
                    px: '6px',
                    py: '4.5px',
                    fontSize: isMobile ? '14px' : '13px',
                    fontWeight: isMobile ? '600' : '700',
                    borderRadius: '10px',
                  },
                }}
                value={radius}
                onChange={handleChange}
              />
              <FormHelperText
                sx={{
                  bgcolor: 'customColor.pageBG',
                  color: '#FF0000',
                  mx: '0',
                  fontSize: '12px',
                }}
              >
                {debouncedRadius.length === 0 ? 'Please add a radius' : ''}
              </FormHelperText>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column - Chart */}
        <Grid item sm={6} xs={12} sx={secondColumnStyles}>
          <ChartHeader
            isMobile={isMobile}
            title={debouncedTitle}
            location={debouncedLocation}
          />
          <ChartLegend isMobile={isMobile} />
          <Chart
            isMobile={isMobile}
            data={data}
            error={error}
            isFetching={isFetching}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimatedSalary;

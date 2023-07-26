import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import { LargeJobCard, InlineJobCard, CustomButton } from '../components';
import icons from '../assets/icons';

const demoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: '70px',
        backgroundColor: 'customColor.pageBG',
        padding: { xs: '0px 24px', md: '0px 80px' },
      }}
    >
      <Grid item sm={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant=' bodyL_2' color='text.secondary'>
          Monday, 13 Jan 2023
        </Typography>
      </Grid>

      <Grid item sm={12} md={8}>
        {!isMobile && (
          <CustomButton
            variant='secondary'
            title='Back'
            startIcon={<img src={icons.arrow} alt='arrow' />}
            sx={{ padding: '7px 10px', marginBottom: '10px' }}
          />
        )}
        <LargeJobCard />
      </Grid>

      <Grid container item sm={12} md={4}>
        <Typography variant='bodyL' mb='20px'>
          Similar Job
        </Typography>
        {demoData.map((index) => (
          <Grid item sm={12} mb='15px' key={index}>
            <InlineJobCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default JobDetail;

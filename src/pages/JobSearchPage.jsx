import {
  Grid,
  Typography,
  Pagination,
  Stack,
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
} from '@mui/material';

import { JobCard, SearchBar, FilterSideBar } from '../components';
import icons from '../assets/icons';
import { logo } from '../assets/images';

const demoData = [1, 2, 3, 4, 5, 6];

const JobSearchPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid
      container
      spacing={5}
      sx={{
        marginTop: '70px',
        backgroundColor: 'customColor.pageBG',
        padding: { xs: '0px 24px', md: '0px 50px' },
      }}
    >
      <Grid item xs={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant=' bodyL_2' color='text.secondary'>
          Monday, 13 Jan 2023
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <SearchBar />
      </Grid>

      {!isMobile && (
        <Grid item lg={3}>
          <FilterSideBar />
        </Grid>
      )}

      <Grid container item xs={12} md={12} lg={9}>
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ width: '100%', marginBottom: '10px' }}
        >
          <Box>
            <Typography
              variant={isMobile ? 'bodyM_3' : 'bodyL_2'}
              color='text.natural6'
            >
              Showing:
            </Typography>
            <Typography variant={isMobile ? 'bodyM_2' : 'bodyL'}>
              10 Jobs
            </Typography>
          </Box>

          <Stack direction='row' alignItems='center'>
            {!isMobile && <Typography variant=' bodyM3_2'>Sort by:</Typography>}
            <Typography variant={isMobile ? 'bodyM3_2' : 'bodyM3'}>
              Relevange
            </Typography>
            <img src={icons.cheveron} alt='cheveron' />
          </Stack>
        </Stack>

        {demoData.map((_, i) => (
          <Grid item sm={12} mb='15px' key={i}>
            <JobCard
              delay={i * 100}
              jobDesc='In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither homeCard nor companyDetailCard. If the cardType matches either of these two values, the tech buttons wont be rendered. Otherwise, the tech buttons will be rendered'
              actionButton={
                <IconButton aria-label='settings'>
                  <img src={icons.isMore} alt='isMore' />
                </IconButton>
              }
              maxSalary={200}
              minSalary={300}
              jobId={'64371284'}
              logo={logo}
              title={'Passionate Programmer'}
              btnText={'Apply Now'}
              requiredTech={['PHP', 'LARAVEL', 'JAVASCRIPT', 'REACT']}
              variant={'primaryLighter'}
            />
          </Grid>
        ))}

        <Pagination
          count={20}
          color='primary'
          shape='rounded'
          size='large'
          sx={{ margin: '20px auto ' }}
        />
      </Grid>
    </Grid>
  );
};

export default JobSearchPage;

import {
  Grid,
  Typography,
  Pagination,
  Stack,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';

import { JobCard, SearchBar, FilterSideBar } from '../components';
import icons from '../assets/icons';

const demoData = [1, 2, 3, 4, 5, 6];

const JobSearchPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      <Grid item xs={12} sm={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant=' bodyL_2' color='text.secondary'>
          Monday, 13 Jan 2023
        </Typography>
      </Grid>

      <Grid item md={12}>
        <SearchBar />
      </Grid>

      {!isMobile && (
        <Grid item md={3} lg={3}>
          <FilterSideBar />
        </Grid>
      )}

      <Grid container item xs={12} sm={12} md={9} lg={9}>
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
              Showing:{' '}
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
            <JobCard />
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

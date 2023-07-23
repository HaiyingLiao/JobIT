// install es7 snippets extension for VS Code https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { JobCard } from '../../components';

const Home = () => {
  return (
    <Box id='homePage' sx={{}}>
      <Box>
        <Typography sx={(theme) => ({ fontSize: theme.typography.h1 })}>
          Welcome to the Job Search Platform for Developers
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: theme.typography.bodyL_3,
            color: theme.palette.text.natural6,
            margin: '20px 0 35px',
          })}
        >
          {new Date().toDateString()}
        </Typography>
        <Box
          id='homePageContainer'
          display='flex'
          justifyContent='space-between'
        >
          <Grid container xs={12} lg={8} md={6} spacing={5}>
            <Box id='latestJobSection'>
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.h4,
                })}
              >
                Latest Job Posts
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <JobCard type='homeJobCard' />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <JobCard type='homeJobCard' />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <JobCard type='homeJobCard' />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <JobCard type='homeJobCard' />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid container xs={12} lg={4} md={6}>
            <Box id='recommendedJobSectio'>
              <h2>Recommened Job</h2>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

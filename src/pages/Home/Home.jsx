import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import { CustomButton, InlineJobCard, JobCard } from '../../components';
import { useGetJobListingsQuery } from '../../services/JSearch';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { data, error, isFetching } = useGetJobListingsQuery({
    query: 'Develper',
    page: '1',
    num_pages: '1'
  });

  if (isFetching) <h1>Fetching.....</h1>;
  if (error) <h1>Some Error</h1>;

  return (
    <Box id='homePage'>
      <Box
        sx={{
          maxWidth: '1470px',
          margin: '0 auto',
          padding: isMobile ? '0 2.5%' : '0'
        }}
      >
        <Typography
          sx={theme => ({
            fontSize: theme.typography.h1,
            marginTop: '70px',
            padding: '50px 0'
          })}
        >
          Welcome to the Job Search Platform for Developers
        </Typography>
        <Typography
          sx={theme => ({
            fontSize: theme.typography.bodyL_3,
            color: theme.palette.text.natural6,
            margin: '0 0 35px'
          })}
        >
          {new Date().toDateString()}
        </Typography>

        <Grid container id='homePageContainer'>
          <Grid
            item
            lg={8}
            sx={theme => ({
              [theme.breakpoints.up('lg')]: {
                paddingRight: '2rem'
              }
            })}
          >
            <Box id='latestJobSection'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography
                  sx={theme => ({
                    fontSize: theme.typography.h4,
                    marginBottom: '30px'
                  })}
                >
                  Latest Job Posts
                </Typography>
                <CustomButton
                  variant='small'
                  title='See All'
                  sx={{
                    backgroundColor: 'customColor.companyJobCardBg',
                    border: '1px solid'
                  }}
                />
              </Box>

              <Grid container spacing={4}>
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

          <Grid
            item
            lg={4}
            sm={12}
            sx={theme => ({
              [theme.breakpoints.down('lg')]: { marginTop: '2rem' }
            })}
          >
            <Box
              id='recommendedJobSection'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={theme => ({
                  fontSize: theme.typography.h4,
                  marginBottom: '30px'
                })}
              >
                Recommended Job
              </Typography>
              <CustomButton
                variant='small'
                title='See All'
                sx={{
                  backgroundColor: 'customColor.companyJobCardBg',
                  border: '1px solid'
                }}
              />
            </Box>

            <Grid
              container
              sx={theme => ({
                padding: '0.5rem 0',
                backgroundColor: theme.palette.customColor.jobCardBg,
                borderRadius: '10px',
                justifyContent: 'space-between'
              })}
            >
              <InlineJobCard type='homeInlineCard' />
              <InlineJobCard type='homeInlineCard' />
              <InlineJobCard type='homeInlineCard' />
              <InlineJobCard type='homeInlineCard' />
              <InlineJobCard type='homeInlineCard' />
              <InlineJobCard type='homeInlineCard' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

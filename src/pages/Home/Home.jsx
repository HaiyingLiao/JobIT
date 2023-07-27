// install es7 snippets extension for VS Code https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// import { useEffect } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CustomButton, InlineJobCard, JobCard } from '../../components';
import { useGetJobListingsQuery } from '../../services/JSearch';
// import axios from 'axios';

const Home = () => {
  // const options = {
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   params: {
  //     query: 'Python developer in Texas, USA',
  //     page: '1',
  //     num_pages: '1',
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'c36aef8c48mshf8457f610df3635p120834jsnff917fd8f9f8',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  //   },
  // };

  // const jobData = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   jobData();
  // }, []);

  const { data, error, isFetching } = useGetJobListingsQuery({
    query: 'Develper',
    page: '1',
    num_pages: '1'
  });

  console.log(data);

  if (isFetching) <h1>Fetching.....</h1>;

  if (error) <h1>{error}</h1>;
  if (data) console.log(data);

  return (
    <Box id='homePage' sx={{}}>
      <Box sx={{ marginTop: '70px' }}>
        <Typography
          sx={theme => ({
            fontSize: theme.typography.h1,
            padding: '20px 0'
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
                Recommened Job
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

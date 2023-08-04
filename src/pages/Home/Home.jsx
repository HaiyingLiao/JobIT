import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

import {
  CustomButton,
  InlineJobCard,
  JobCard,
  Loader,
  ServerError,
} from '../../components';
import { useGetJobListingsQuery } from '../../services/JSearch';
import icons from '../../assets/icons';
import { formatSalary } from '../../Utils/TestingTool/dataCleaningTool';

const Home = () => {
  const { data, error, isFetching } = useGetJobListingsQuery({
    query: 'Developers',
    page: '1',
    num_pages: '1',
  });

  const [clickedShowMore, setClickedShowMore] = useState(false);

  if (isFetching) return <Loader />;

  if (error) return <ServerError />;

  const datas = clickedShowMore ? data.data : data.data.slice(0, 4);

  return (
    <Box id='homePage'>
      <Box
        sx={{
          maxWidth: '1470px',
          margin: '0 auto',
          padding: '0 5%',
        }}
      >
        <Typography
          sx={(theme) => ({
            fontSize: theme.typography.h1,
            marginTop: '70px',
            padding: '50px 0',
          })}
        >
          Welcome to the Job Search Platform for Developers
        </Typography>
        <Typography
          sx={(theme) => ({
            fontSize: theme.typography.bodyL_3,
            color: theme.palette.text.natural6,
            margin: '0 0 35px',
          })}
        >
          {new Date().toDateString()}
        </Typography>

        <Grid container id='homePageContainer'>
          <Grid
            item
            lg={8}
            sx={(theme) => ({
              [theme.breakpoints.up('lg')]: {
                paddingRight: '2rem',
              },
            })}
          >
            <Box id='latestJobSection'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={(theme) => ({
                    fontSize: theme.typography.h4,
                    marginBottom: '30px',
                  })}
                >
                  Latest Job Posts
                </Typography>
                <CustomButton
                  variant='small'
                  title={clickedShowMore ? 'Hide' : 'See All'}
                  sx={{
                    backgroundColor: 'customColor.companyJobCardBg',
                    border: '1px solid',
                  }}
                  onClick={() => {
                    setClickedShowMore(!clickedShowMore);
                  }}
                />
              </Box>

              <Grid container spacing={4}>
                {datas?.map((card) => (
                  <Grid key={card.job_id} item xs={12} md={6}>
                    {/* <JobCard type='homeJobCard' cardData={card} /> */}

                    <JobCard
                      delay={100}
                      jobDesc="In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither 'homeCard' nor 'companyDetailCard'. If the cardType matches either of these two values, the tech buttons won't be rendered. Otherwise, the tech buttons will be rendered."
                      actionButton={
                        <IconButton aria-label='settings'>
                          <img src={icons.isMore} alt='isMore' />
                        </IconButton>
                      }
                      btnText='Visit now'
                      minSalary={formatSalary(card?.job_min_salary)}
                      maxSalary={formatSalary(card?.job_max_salary)}
                      jobId={card?.job_id}
                      logo={card?.employer_logo}
                      type='homeJobcard'
                      title={card?.job_title}
                      requiredTech={card?.job_required_skills ?? []}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            lg={4}
            sm={12}
            sx={(theme) => ({
              [theme.breakpoints.down('lg')]: { marginTop: '2rem' },
            })}
          >
            <Box
              id='recommendedJobSection'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: theme.typography.h4,
                  marginBottom: '30px',
                })}
              >
                Recommended Job
              </Typography>
              <CustomButton
                variant='small'
                title='See All'
                sx={{
                  backgroundColor: 'customColor.companyJobCardBg',
                  border: '1px solid',
                }}
              />
            </Box>

            <Grid
              container
              sx={(theme) => ({
                padding: '0.5rem 0',
                backgroundColor: theme.palette.customColor.jobCardBg,
                borderRadius: '10px',
                justifyContent: 'space-between',
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

import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import {
  CustomButton,
  InlineJobCard,
  JobCard,
  Loader,
  ServerError
} from '../../components';
import { useGetJobListingsQuery } from '../../services/JSearch';
import icons from '../../assets/icons';
import {
  formatSalary,
  sinceDays
} from '../../Utils/TestingTool/dataCleaningTool';
import FeatCompanyCard from '../../components/FeatCompanyCard/FeatCompanyCard';
const Home = () => {
  const { data, error, isFetching } = useGetJobListingsQuery({
    query: 'Developers',
    page: '1',
    num_pages: '1'
  });

  if (isFetching) return <Loader />;

  if (error) return <ServerError />;

  const datas = data.data.slice(0, 4);

  const sliceCompanies = sliceVal => {
    const featCompaniesMapped = data?.data
      .map(job => job)
      .sort((a, b) => b?.job_apply_quality_score - a?.job_apply_quality_score)
      .slice(0, sliceVal);
    return featCompaniesMapped;
  };

  const featCompanies = sliceCompanies(3);
  const recommendedCompanies = sliceCompanies(7);

  return (
    <Box id='homePage'>
      <Box>
        <Typography
          sx={theme => ({
            fontSize: theme.typography.h1
          })}
        >
          Welcome to the Job Search Platform for Developers
        </Typography>
        <Typography
          sx={theme => ({
            fontSize: theme.typography.bodyL_3,
            color: theme.palette.text.natural6,
            margin: '14px 0 35px'
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
                  alignItems: 'center !important',
                  marginBottom: '30px'
                }}
              >
                <Typography
                  sx={theme => ({
                    fontSize: theme.typography.h4
                  })}
                >
                  Latest Job Posts
                </Typography>
                <CustomButton
                  variant='small'
                  title='See All'
                  href='/job-search'
                  sx={{
                    backgroundColor: 'customColor.companyJobCardBg',
                    border: '1px solid'
                  }}
                />
              </Box>

              <Grid container spacing={4}>
                {datas?.map(card => (
                  <Grid key={card.job_id} item xs={12} md={6}>
                    <JobCard
                      delay={100}
                      jobDesc="In this updated code, the YourComponent now takes a prop cardType that represents the type of the card. You can pass the appropriate cardType value to the component when using it. The shouldRenderTechButtons variable is set to true only if the cardType is neither 'homeCard' nor 'companyDetailCard'. If the cardType matches either of these two values, the tech buttons won't be rendered. Otherwise, the tech buttons will be rendered."
                      actionButton={
                        <IconButton aria-label='settings'>
                          <img src={icons.isMore} alt='isMore' />
                        </IconButton>
                      }
                      sinceLeft={sinceDays(
                        card?.job_offer_expiration_datetime_utc
                      )}
                      btnText='Visit now'
                      minSalary={formatSalary(card?.job_min_salary)}
                      maxSalary={formatSalary(card?.job_max_salary)}
                      jobId={card?.job_id}
                      companyName={card?.employer_name}
                      logo={card?.employer_logo}
                      type='homeJobcard'
                      title={card?.job_title}
                      requiredTech={card?.job_required_skills ?? []}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box id='featCompanies'>
              <Typography
                sx={theme => ({
                  fontSize: theme.typography.h4,
                  margin: '30px 0'
                })}
              >
                Featuted Companies
              </Typography>
              <Grid
                container
                wrap='wrap'
                spacing={4}
                sx={{ justifyContent: 'center' }}
              >
                {featCompanies.map(featComp => (
                  <Grid key={featComp.job_id} item xs={12} sm={6} md={4}>
                    <FeatCompanyCard companyData={featComp} />
                  </Grid>
                ))}
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
                alignItems: 'center',
                marginBottom: '30px'
              }}
            >
              <Typography
                sx={theme => ({
                  fontSize: theme.typography.h4
                })}
              >
                Recommended For You
              </Typography>
              <CustomButton
                variant='small'
                title='See All'
                href='/job-search'
                sx={{
                  backgroundColor: 'customColor.companyJobCardBg',
                  border: '1px solid'
                }}
              />
            </Box>

            <Grid
              container
              sx={theme => ({
                padding: '0.65rem 1.25rem',
                backgroundColor: theme.palette.customColor.jobCardBg,
                borderRadius: '10px',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              })}
            >
              {recommendedCompanies.map(company => (
                <InlineJobCard
                  key={company.job_id}
                  data={company}
                  type='homeInlineCard'
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

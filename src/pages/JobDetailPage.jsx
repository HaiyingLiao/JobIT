import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  JobDetail,
  InlineJobCard,
  CustomButton,
  SearchBar,
  Loader,
  NotFound
} from '../components';
import icons from '../assets/icons';
import { useGetJobByIdQuery, useGetSearchQuery } from '../services/JSearch';
import getDate from '../Utils/getDate';

const JobDetailPage = () => {
  const date = getDate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { jobId } = useParams();
  const { data, isFetching, isError } = useGetJobByIdQuery({ id: jobId });
  const {
    data: similarJobData,
    isError: similarJobisError,
    isFetching: similarJobisFetching
  } = useGetSearchQuery({
    name: 'developer',
    currentPage: '1',
    employmentTypes: 'FULLTIME',
    experience: '',
    isRemote: false
  });

  if (isFetching || similarJobisFetching) return <Loader />;
  if (isError || similarJobisError) return <NotFound />;

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          {date}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <SearchBar />
      </Grid>

      <Grid item xs={12} lg={8}>
        {!isMobile && (
          <CustomButton
            variant='secondary'
            title='Back'
            startIcon={<img src={icons.arrow} alt='arrow' />}
            sx={{ padding: '7px 10px', marginBottom: '10px' }}
          />
        )}
        <JobDetail data={data?.data} />
      </Grid>

      <Grid item xs={12} lg={4}>
        <Typography variant='bodyL'>Similar Jobs</Typography>

        {similarJobData?.data.map((job, i) => (
          <InlineJobCard key={i} data={job} />
        ))}
      </Grid>
    </Grid>
  );
};

export default JobDetailPage;

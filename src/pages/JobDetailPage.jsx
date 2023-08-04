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
import { useGetJobByIdQuery } from '../services/JSearch';
import getDate from '../Utils/getDate';

const demoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobDetailPage = () => {
  const date = getDate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { jobId } = useParams();
  const { data, isFetching, isError } = useGetJobByIdQuery({ id: jobId });

  if (isFetching) return <Loader />;

  if (isError) return <NotFound />;

  return (
    <Grid
      container
      spacing={5}
      sx={{
        marginTop: '70px',
        backgroundColor: 'customColor.pageBG',
        maxWidth: '1500px',
        padding: '0 5% 3%'
      }}
    >
      <Grid item xs={12}>
        <Typography variant='h1' mb='12px'>
          Let’s find your dream job
        </Typography>
        <Typography variant=' bodyL_2' color='text.secondary'>
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
        <Typography variant='bodyL'>Similar Job</Typography>

        {demoData.map((_, i) => (
          <InlineJobCard key={i} />
        ))}
      </Grid>
    </Grid>
  );
};

export default JobDetailPage;

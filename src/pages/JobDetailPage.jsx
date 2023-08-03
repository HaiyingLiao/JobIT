import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import {
  JobDetail,
  InlineJobCard,
  CustomButton,
  SearchBar,
} from '../components';
import icons from '../assets/icons';
import { useGetJobByIdQuery } from '../services/JSearch';
import { useParams } from 'react-router-dom';

const demoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobDetailPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();

  const { data, error, isFetching } = useGetJobByIdQuery({
    query: id,
  });

  if (isFetching) {
    return 'somet';
  }

  if (error) {
    return 'somet';
  }
  console.log(data.data[0]);
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

      <Grid item xs={12} lg={8}>
        {!isMobile && (
          <CustomButton
            variant='secondary'
            title='Back'
            startIcon={<img src={icons.arrow} alt='arrow' />}
            sx={{ padding: '7px 10px', marginBottom: '10px' }}
          />
        )}
        <JobDetail data={data.data} />
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

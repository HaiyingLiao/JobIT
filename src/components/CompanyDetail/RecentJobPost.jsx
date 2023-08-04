import { Typography, Container, Box, IconButton, Divider } from '@mui/material';
import { useState, useEffect } from 'react';

import useSearch from '../../hooks/useSearch';
import { getSearchValue } from '../../slice/searchSlice';
import CircularLoader from '../Loader/Circular';
import { CustomButton, JobCard } from '../../components';
import SearchInput from './SearchInput';
import icons from '../../assets/icons';

export default function RecentJobPost({ recentJobs, company }) {
  const [clicked, setClicked] = useState(false);
  const [sources, setSources] = useState(recentJobs?.slice(0, 4));
  const { data, dispatch, isError, isFetching } = useSearch(
    undefined,
    undefined,
    undefined,
    company
  );

  useEffect(() => {
    setSources(clicked ? recentJobs : recentJobs?.slice(0, 4));
  }, [clicked]);

  const onSubmit = (data) => dispatch(getSearchValue({ data }));

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 20, { behavior: 'smooth' });
    }
  };

  if (isFetching) return <CircularLoader />;

  if (isError)
    return (
      <Alert severity='error'>
        Oppss...! Something went wrong, please try to reload the page
      </Alert>
    );

  return (
    <Container
      sx={{
        backgroundColor: 'customColor.jobCardBg',
        borderRadius: '10px',
        padding: '5px',
        marginTop: '3.81rem',
        transition: 'all 300ms ease !important',
      }}
    >
      <SearchInput isFetching={isFetching} onSubmit={onSubmit} />
      {data?.data.length < 1 && (
        <Typography variant='bodyM4_4' sx={{ color: 'red' }}>
          Not found
        </Typography>
      )}
      <Box
        sx={{
          width: '100%',
        }}
      >
        {data && data?.data?.length > 1 && (
          <Typography
            color='text.primary'
            sx={{
              typography: {
                xs: 'bodyM',
                sm: 'bodyL',
              },
              paddingTop: '30px',
              paddingBottom: '15px',
            }}
          >
            Results({data.data.length})
          </Typography>
        )}
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.88rem',
          }}
        >
          {data?.data.map((job, i) => (
            <JobCard
              delay={i * 150}
              jobDesc={`${job?.job_description}`}
              actionButton={
                <IconButton aria-label='more'>
                  <img src={icons.isMore} alt='three dots  icon ' />
                </IconButton>
              }
              btnText='Apply now'
              salary={{
                min: job?.job_min_salary,
                max: job?.job_max_salary,
              }}
              currency={job?.job_salary_currency ?? 'USD'}
              jobId={job?.job_id}
              key={job?.job_id}
              period={job?.job_salary_period}
              logo={job?.employer_logo}
              type={'companyDetail'}
              title={job?.job_title}
              requiredTech={job?.job_required_skills ?? []}
              variant={'primaryLighter'}
            />
          ))}
        </Box>
        {data?.data.length > 1 && (
          <Divider
            sx={{
              marginTop: '50px',
            }}
          />
        )}
      </Box>
      <Typography
        color='text.primary'
        sx={{
          typography: {
            xs: 'bodyM',
            sm: 'bodyL',
          },
          paddingTop: '30px',
          paddingBottom: '15px',
        }}
      >
        Recently Posted Job
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.88rem',
        }}
      >
        {sources?.map((job, i) => (
          <JobCard
            key={job?.job_id}
            delay={i * 150}
            jobDesc={`${job?.job_description}`}
            actionButton={
              <IconButton aria-label='more'>
                <img src={icons.isMore} alt='three dots  icon ' />
              </IconButton>
            }
            btnText='Apply now'
            salary={{
              min: job?.job_min_salary,
              max: job?.job_max_salary,
            }}
            currency={job?.job_salary_currency ?? 'USD'}
            jobId={job?.job_id}
            period={job?.job_salary_period}
            logo={job?.employer_logo}
            type={'companyDetail'}
            title={job?.job_title}
            requiredTech={job?.job_required_skills}
            variant={'primaryLighter'}
          />
        ))}
      </Box>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      >
        <CustomButton
          onClick={() => {
            setClicked(!clicked);
            clicked ? scrollToTop() : undefined;
          }}
          title={clicked ? 'Hide' : 'See All Jobs'}
          variant='secondaryOutlined'
        />
      </div>
    </Container>
  );
}

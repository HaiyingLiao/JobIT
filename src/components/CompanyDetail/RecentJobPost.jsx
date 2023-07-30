import { Typography, Container, Box, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { CustomButton, JobCard } from '../../components';
import SearchInput from './SearchInput';
import icons from '../../assets/icons';

export default function RecentJobPost({ recentJobs }) {
  const [clicked, setClicked] = useState(false);
  const [sources, setSources] = useState(recentJobs?.slice(0, 4));

  useEffect(() => {
    setSources(clicked ? recentJobs : recentJobs?.slice(0, 4));
  }, [clicked]);

  return (
    <Container
      sx={{
        backgroundColor: 'customColor.jobCardBg',
        borderRadius: '10px',
        padding: '5px',
        marginTop: '3.81rem',
      }}
    >
      <SearchInput />
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
            delay={i * 150}
            jobDesc={`${job?.job_description}`}
            actionButton={
              <IconButton aria-label='settings'>
                <img src={icons.isMore} alt='isMore' />
              </IconButton>
            }
            maxSalary={job.job_max_salary}
            minSalary={job.job_min_salary}
            jobId={job?.job_id}
            key={job?.job_id}
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
          onClick={() => setClicked(!clicked)}
          title={clicked ? 'Hide' : 'See All Jobs'}
          variant='secondaryOutlined'
        />
      </div>
    </Container>
  );
}

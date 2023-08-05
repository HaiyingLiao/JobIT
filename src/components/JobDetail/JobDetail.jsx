import { Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

import CardHeader from './Header';
import JobInfo from './JobInfo';
import ListSection from './ListSection';
import Publisher from './Publisher';
import { CustomButton } from '..';
import { placeholder } from '../../assets/images';

export default function JobDetail({ data }) {
  const [showAll, setShowAll] = useState(false);

  const responsibilities = data[0]?.job_highlights.Responsibilities;
  const qualifications = data[0]?.job_highlights.Qualifications;
  const jobDescription = showAll
    ? data[0]?.job_description
    : data[0]?.job_description.slice(0, 1000);
  const companyName = data[0]?.employer_name;
  const companyAddress = `${data[0]?.job_city},${data[0]?.job_country}`;
  const logo = data[0]?.employer_logo ? data[0]?.employer_logo : placeholder;

  return (
    <Card
      data-testid='job-detail'
      sx={{
        padding: '12px',
        backgroundImage: 'none',
        backgroundColor: 'customColor.jobCardBg',
        boxShadow: 0
      }}
    >
      <CardHeader logo={logo} />
      <CardContent>
        <JobInfo
          company={companyName}
          companyAddress={companyAddress}
          title={data[0]?.job_title}
          JobUrlData={data[0]?.job_apply_link}
        />
        <section style={{ marginTop: '30px' }}>
          <Typography
            variant='bodyL'
            color='text.primary'
            pt={5}
            sx={{
              typography: {
                xs: 'bodyM',
                sm: 'bodyL'
              }
            }}
          >
            About The Job
          </Typography>
          <Typography
            paragraph
            pt={1}
            color='text.secondary'
            sx={{
              typography: {
                xs: 'bodyM3_4',
                sm: 'bodyM_4'
              },
              textAlign: 'justify'
            }}
          >
            {jobDescription}
          </Typography>
          <CustomButton
            title={showAll ? 'Show less' : 'Show all'}
            variant='small'
            onClick={() => setShowAll(prev => !prev)}
          />
        </section>
        <ListSection listData={responsibilities} title='Responsibilities' />
        <ListSection
          listData={qualifications}
          title='Qualifications and Skill Sets'
        />
        <Publisher
          companyName={companyName}
          companydesc={data[0]?.job_description.slice(0, 400)}
          followers={200000}
          logo={logo}
        />
      </CardContent>
    </Card>
  );
}

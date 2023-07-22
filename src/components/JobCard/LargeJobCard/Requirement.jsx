import { Typography } from '@mui/material';

import { RequirementWrapper } from './largeCardStyle';

export default function Requirement() {
  const exampleData = [
    {
      title: 'Experience',
      value: 'Minimum 1 year',
    },
    {
      title: 'Work Level',
      value: 'Senior Level',
    },
    {
      title: 'Employee Type',
      value: 'Full Time Jobs',
    },
    {
      title: 'Offer Salary',
      value: '$2150.0 / month',
    },
  ];

  return (
    <RequirementWrapper>
      {exampleData.map((data) => (
        <div key={data.title}>
          <Typography
            color='lightslategrey'
            variant='subtitle1'
            sx={{
              fontSize: '0.7rem',
              fontWeight: '400',
              color: 'text.primary',
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: 'secondary',
            }}
          >
            {data.value}
          </Typography>
        </div>
      ))}
    </RequirementWrapper>
  );
}

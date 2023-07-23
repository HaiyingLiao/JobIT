import { Typography } from '@mui/material';

import { RequirementWrapper } from './style';

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
        <div
          key={data.title}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant='bodyM3_4' color='secondary.contrastText'>
            {data.title}
          </Typography>
          <Typography color='text.secondary' variant='bodyM_2'>
            {data.value}
          </Typography>
        </div>
      ))}
    </RequirementWrapper>
  );
}

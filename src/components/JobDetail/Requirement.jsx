import { Typography, useTheme } from '@mui/material';

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
  const {
    palette: { customColor },
  } = useTheme();
  return (
    <RequirementWrapper backgroundColor={customColor?.requirementBg}>
      {exampleData.map((data) => (
        <div key={data.title}>
          <Typography
            color='secondary.contrastText'
            sx={{
              typography: {
                xs: 'bodyM3_3',
                sm: 'bodyM3_2',
              },
            }}
          >
            {data.title}
          </Typography>
          <Typography
            paragraph
            color='text.primary'
            sx={{
              typography: {
                xs: 'bodyM3_2',
                sm: 'bodyM_2',
              },
            }}
          >
            {data.value}
          </Typography>
        </div>
      ))}
    </RequirementWrapper>
  );
}

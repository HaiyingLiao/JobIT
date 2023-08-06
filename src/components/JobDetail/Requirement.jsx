import { Typography, useTheme } from '@mui/material';

import { RequirementWrapper } from './style';
import { formatCurrency } from '../../Utils/numberFormat';

export default function Requirement({ data }) {
  function getExperiencesYear(obj) {
    let experience = '';
    for (const key in obj) {
      if (obj[key] && obj[key] === 'no_experience_required') {
        experience = 'Required';
      } else {
        experience = 'Not Required';
      }
    }
    return experience;
  }
  const workLevel = jobType => {
    switch (jobType) {
      case 'FULLTIME':
        return 'Full time';
      case 'PARTTIME':
        return 'Part time';
      case 'INTERN':
        return 'Intern';
      case 'CONTRACTOR':
        return 'Contractor';
    }
  };

  const exampleData = [
    {
      title: 'Experience',
<<<<<<< HEAD
      value: 'Minimum 1 year'
    },
    {
      title: 'Work Level',
      value: 'Senior Level'
    },
    {
      title: 'Employee Type',
      value: 'Full Time Jobs'
    },
    {
      title: 'Offer Salary',
      value: '$2150.0 / month'
=======
      value: getExperiencesYear(data[0]?.job_required_experience)
    },
    {
      title: 'Work Level',
      value:
        getExperiencesYear(data[0]?.job_required_experience) === 'Required'
          ? 'Senior Level'
          : 'Junior Level'
    },
    {
      title: 'Employee Type',
      value: workLevel(data[0]?.job_employment_type)
    },
    {
      title: 'Offer Salary',
      value: formatCurrency(
        data[0]?.job_min_salary,
        data[0]?.job_max_salary,
        '$'
      )
>>>>>>> main
    }
  ];
  const {
    palette: { customColor }
  } = useTheme();

  return (
    <RequirementWrapper backgroundColor={customColor?.requirementBg}>
      {exampleData.map(data => (
        <div key={data.title}>
          <Typography
            color='secondary.contrastText'
            sx={{
              typography: {
                xs: 'bodyM3_3',
                sm: 'bodyM3_2'
              }
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
                sm: 'bodyM_2'
              }
            }}
          >
            {data.value}
          </Typography>
        </div>
      ))}
    </RequirementWrapper>
  );
}

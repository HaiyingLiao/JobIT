import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';

import { placeholder } from '../../assets/images';
import { CustomButton } from '..';
import icons from '../../assets/icons';

import { formatCurrency } from '../../Utils/numberFormat';
import { Link } from 'react-router-dom';
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const InlineJobCard = ({ type, data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const cardType = type === 'homeInlineCard';

  const salaries = formatCurrency(
    data?.job_min_salary,
    data?.job_max_salary,
    data?.job_salary_currency ?? 'USD'
  );

  return (
    <Card
      sx={{
        maxWidth: '100%',
        backgroundColor: cardType
          ? 'customColor.requirementBg'
          : 'customColor.jobCardBg',
        borderRadius: '10px',
        width: '100%',
        margin: '10px auto',
        boxShadow: 'unset'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'space-between',
          gap: '10px'
        }}
      >
        <Box>
          <Link to={`/company/${data?.employer_name}`}>
            <img
              src={data?.employer_logo ? data?.employer_logo : placeholder}
              alt='logo'
              width={40}
              height={40}
            />
          </Link>
        </Box>

        <Stack spacing={1} sx={{ width: '60%', maxWidth: '100%' }}>
          <Typography variant={isMobile ? 'bodyM2_2' : 'bodyM_2'}>
            <Link
              style={{ textDecoration: 'none', color: 'unset' }}
              to={`/job/${data?.job_id}`}
            >
              {data?.job_title.slice(0, 20)}
            </Link>
          </Typography>

          <Typography
            variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}
            color='text.secondary'
          >
            {data?.employer_name.slice(0, 20)}
            {bull}
            {`${data?.job_city},${data?.job_country}`}
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          sx={{
            width: '30%',
            maxWidth: '100%',

            textAlign: 'right'
          }}
        >
          <Typography variant={isMobile ? 'bodyM4_2' : 'bodyM3_3'}>
            {salaries?.min && salaries.max
              ? salaries?.min - salaries?.max
              : salaries}
            <Typography
              variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}
              component='span'
              color='text.secondary'
            ></Typography>
          </Typography>

          {cardType ? (
            <Typography variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}>
              {`${data?.job_employment_type[0]}${data.job_employment_type
                .slice(1)
                .toLowerCase()}`}
            </Typography>
          ) : (
            <Box height='18px'></Box>
          )}
        </Stack>
      </CardContent>

      {!cardType && (
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='bodyL_4' color='text.natural6'>
              5 days left
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <CustomButton
              variant='secondaryOutlined'
              title={<img src={icons.archive} alt='archive' />}
              sx={{ minWidth: '18px' }}
            />

            <CustomButton variant='primaryLighter' title='View' />
          </Box>
        </CardActions>
      )}
    </Card>
  );
};

export default InlineJobCard;

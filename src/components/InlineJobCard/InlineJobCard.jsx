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
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const InlineJobCard = ({ type, data }) => {
  console.log(data);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const cardType = type === 'homeInlineCard';

  return (
    <Card
      sx={{
        maxWidth: '100%',
        backgroundColor: cardType
          ? 'customColor.requirementBg'
          : 'customColor.jobCardBg',
        padding: '10px ',
        margin: '20px 0px',
        borderRadius: '10px',
        width: '100%'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px'
        }}
      >
        <Box>
          <img
            src={data?.employer_logo ? data?.employer_logo : placeholder}
            alt='logo'
            width={40}
            height={40}
          />
        </Box>

        <Stack spacing={1}>
          <Typography variant={isMobile ? 'bodyM2_2' : 'bodyM_2'}>
            {data?.job_title}
          </Typography>

          <Typography
            variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}
            color='text.secondary'
          >
            {data?.employer_name}
            {bull}
            {`${data?.job_city},${data?.job_country}`}
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant={isMobile ? 'bodyM4_2' : 'bodyM3_3'}>
            $70-80
            <Typography
              variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}
              component='span'
              color='text.secondary'
            >
              / Hr
            </Typography>
          </Typography>

          {cardType ? (
            <Typography variant={isMobile ? 'bodyM4_4' : 'bodyM3_4'}>
              Full-Time
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

            <CustomButton
              variant='primaryLighter'
              title='View'
              href={`/job/${data?.job_id}`}
            />
          </Box>
        </CardActions>
      )}
    </Card>
  );
};

export default InlineJobCard;

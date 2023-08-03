import { Box, Typography, Avatar, AvatarGroup } from '@mui/material';

import CardHeader from '../JobDetail/Header';
import { CustomButton } from '../../components';
import RecentJobPost from './RecentJobPost';
import icons from '../../assets/icons';
import { placeholder, user } from '../../assets/images';
import { handleFalsy } from '../../Utils/handleFalsy';

export default function CompanyDetail({
  companyName,
  companyType,
  city,
  country,
  naicsName,
  recentJobs,
  companyImage,
}) {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: '100%',
          lg: '53.5rem',
        },
      }}
    >
      <CardHeader logo={companyImage ?? placeholder} />
      <Box
        component='section'
        sx={{
          paddingTop: '40px ',
          paddingLeft: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div style={{ padding: '5px' }}>
          <Typography
            variant='h2'
            sx={{
              typography: {
                xs: 'bodyM',
                sm: 'h1',
              },
              paddingBottom: '0.62rem',
              lineHeight: '2.5rem',
            }}
          >
            {handleFalsy(companyName, 'N/A')}
          </Typography>
          <div style={{ paddingTop: '6px' }}>
            <Typography
              color='text.primary'
              sx={{
                typography: {
                  xs: 'bodyM3_4',
                  sm: 'bodyL_3',
                },
                lineHeight: '1.5rem',
              }}
            >
              {handleFalsy(companyType, 'N/A')}
              <img src={icons.oval1} alt='oval gray icon' /> {city}, {country}
            </Typography>
            <Typography
              paragraph
              color='text.secondary'
              sx={{
                typography: {
                  xs: 'bodyM4_4',
                  sm: 'bodyM_3',
                },
                lineHeight: '1.5rem',
                paddingTop: '0.5rem',
              }}
            >
              {handleFalsy(naicsName, 'N/A')}
              <img src={icons.oval1} alt='oval gray icon' /> 203,765 Followers
            </Typography>
          </div>
        </div>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: 'auto',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <AvatarGroup max={3} sx={{ marginBottom: '1.25rem' }}>
            {[1, 2, 3, 4].map(() => (
              <Avatar alt='Remy Sharp' src={user} key={Math.random() * 53657} />
            ))}
          </AvatarGroup>
          <CustomButton
            variant='primaryOutlined'
            title='Follow'
            sx={{
              width: ' 9.0625rem',
              padding: ' 0.4375rem 0.625rem',
            }}
            startIcon={<img src={icons.plus} alt='plus icon' />}
          />
        </Box>
      </Box>
      <RecentJobPost recentJobs={recentJobs} />
    </Box>
  );
}

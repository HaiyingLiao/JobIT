import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
} from '@mui/material';

import { CustomButton } from '..';
import icons from '../../assets/icons';
import demoImg from '../../assets/images/companyLogo.png';
import { Stack } from '@mui/system';

const demoTech = ['PHP', 'CSS', 'React', 'Laravel'];
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const JobCard = ({ type }) => {
  const cardType = type === 'homeJobCard';

  return (
    <Card
      sx={{
        maxWidth: cardType ? '100% ' : '950px',
        p: 1,
        backgroundColor: 'customColor.jobCardBg',
      }}
    >
      <CardHeader
        avatar={
          <Box
            sx={{
              padding: '8px 8px 2px',
              borderRadius: '10px',
              background: 'rgba(23, 23, 37, 0.06)',
            }}
          >
            <img src={demoImg} alt='logo' />
          </Box>
        }
        title={
          <Typography variant={{ xs: 'bodyM_2', sm: 'bodyL_2' }}>
            Passionate programmer
          </Typography>
        }
        subheader={
          cardType ? (
            demoTech.map((tech, i) => (
              <CustomButton
                variant='small'
                title={tech}
                key={i}
                sx={{ margin: '2px' }}
              />
            ))
          ) : (
            <>
              <Typography variant='bodyM3_3' color='text.secondary'>
                UIHUT Technologies LLC{bull}Sylhet, BD{bull}3 days ago
              </Typography>
            </>
          )
        }
        action={
          cardType ? (
            <IconButton aria-label='settings'>
              <img src={icons.isMore} alt='isMore' />
            </IconButton>
          ) : (
            <CustomButton
              variant='small'
              title='Save job'
              endIcon={<img src={icons.icSaved} alt='icSaved' />}
            />
          )
        }
      />
      <CardContent>
        <Typography
          variant={{ xs: 'bodyM2_4', sm: 'bodyM_4' }}
          color='text.secondary'
        >
          Here at Microsoft, we are a passionate, fun-loving, growing team. We
          are looking for passionate programmers who want to solve technical
          challenges and learn and incorporate new technologies into their
          skillset to join our team and grow with us.
        </Typography>
      </CardContent>
      {cardType ? (
        <CardContent>
          <Stack direction='row' justifyContent='space-between'>
            <CustomButton
              variant='small'
              title='Full time'
              startIcon={<img src={icons.briefcase} alt='briefcase' />}
            />
            <CustomButton
              variant='small'
              title='45 applied'
              startIcon={<img src={icons.people} alt='people' />}
            />
            <CustomButton
              variant='small'
              title='3 days left'
              startIcon={<img src={icons.clock} alt='clock' />}
            />
          </Stack>
        </CardContent>
      ) : (
        <CardContent>
          {demoTech.map((tech, i) => (
            <CustomButton
              variant='small'
              title={tech}
              key={i}
              sx={{ margin: '3px' }}
            />
          ))}
        </CardContent>
      )}

      <CardActions>
        {cardType ? (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
            sx={{ width: '100%' }}
          >
            <Typography variant={{ xs: 'bodyM_2', sm: 'bodyL_2' }}>
              $15k-20k
              <Typography
                variant={{ xs: 'bodyM_4', sm: 'bodyL_4' }}
                component='span'
                color='text.secondary'
              >
                /month
              </Typography>
            </Typography>
            <CustomButton variant='primary' title='Apply Now' />
          </Stack>
        ) : (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            flexWrap='wrap'
            gap='30px'
            sx={{ width: '100%' }}
          >
            <Box sx={{ display: 'flex', gap: '35px' }}>
              <Typography variant='bodyL_2'>
                $15k-20k
                <Typography
                  variant='bodyL_4'
                  component='span'
                  color='text.secondary'
                >
                  /month
                </Typography>
              </Typography>

              <Typography variant='bodyL_2'>
                54{' '}
                <Typography
                  variant='bodyL_4'
                  component='span'
                  color='text.secondary'
                >
                  People Applied
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: '20px' }}>
              <CustomButton
                variant='secondary'
                title='Message'
                sx={{ minWidth: { xs: '134px', sm: '125px' } }}
              />
              <CustomButton
                variant='primary'
                title='Apply Now'
                sx={{ minWidth: { xs: '141px', sm: '180px' } }}
              />
            </Box>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default JobCard;

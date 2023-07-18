import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Typography,
  Box,
} from '@mui/material';

import {
  SmallButton,
  PrimaryButton,
  SecondaryButton,
} from '../Buttons/Buttons';
import icons from '../../assets/icons';

const demoTech = ['PHP', 'CSS', 'React', 'Laravel'];
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const styleSpaceBetween = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const PrimaryJobCard = () => {
  return (
    <Card sx={{ maxWidth: 430, p: 1 }}>
      <CardHeader
        avatar={<Avatar aria-label='recipe'>H</Avatar>}
        title={<Typography variant='h2'>Passionate programmer</Typography>}
        subheader={demoTech.map((tech, i) => (
          <SmallButton title={tech} key={i} margin='2px' />
        ))}
        action={
          <IconButton aria-label='settings'>
            <img src={icons.isMore} alt='isMore' />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='bodyM_4' color='text.secondary'>
          Here at Microsoft, we are a passionate, fun-loving, growing team. We
          are looking for passionate programmers who want to solve technical
          challenges and learn and incorporate new technologies into their
          skillset to join our team and grow with us.
        </Typography>
      </CardContent>
      <CardContent sx={styleSpaceBetween}>
        <SmallButton
          title='Full time'
          startIcon={<img src={icons.briefcase} alt='briefcase' />}
        />
        <SmallButton
          title='45 applied'
          startIcon={<img src={icons.people} alt='people' />}
        />
        <SmallButton
          title='3 days left'
          startIcon={<img src={icons.clock} alt='clock' />}
        />
      </CardContent>
      <CardActions sx={styleSpaceBetween}>
        <Typography variant='bodyL_2'>
          $15k-20k
          <Typography variant='bodyL_4' component='span' color='text.secondary'>
            /month
          </Typography>
        </Typography>
        <PrimaryButton title='Apply Now' />
      </CardActions>
    </Card>
  );
};

export const SecondaryJobCard = () => {
  return (
    <Card sx={{ maxWidth: 950, p: 1 }}>
      <CardHeader
        avatar={<Avatar aria-label='recipe'>H</Avatar>}
        title={<Typography variant='h2'>Passionate programmer</Typography>}
        subheader={
          <Typography variant='bodyM3_3' color='text.secondary'>
            UIHUT Technologies LLC{bull}Sylhet, BD{bull}3 days ago
          </Typography>
        }
        action={
          <SmallButton
            title='Save job'
            endIcon={<img src={icons.icSaved} alt='icSaved' />}
          />
        }
      />
      <CardContent>
        <Typography variant='bodyM_4' color='text.secondary'>
          Here at Microsoft, we are a passionate, fun-loving, growing team. We
          are looking for passionate programmers who want to solve technical
          challenges and learn and incorporate new technologies into their
          skillset to join our team and grow with us.
        </Typography>
      </CardContent>
      <CardContent>
        {demoTech.map((tech, i) => (
          <SmallButton title={tech} key={i} margin='3px' />
        ))}
      </CardContent>
      <CardActions sx={styleSpaceBetween}>
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

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <SecondaryButton title='Message' />
          <PrimaryButton title='Apply Now' width='180px' />
        </Box>
      </CardActions>
    </Card>
  );
};

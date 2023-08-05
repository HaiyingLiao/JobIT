import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';
import { placeholder } from '../../assets/images';
import { Stack } from '@mui/system';
import icons from '../../assets/icons';

const FeatCompanyCard = ({ logo }) => {
  const loc = 'New York, USA';
  return (
    <Card
      sx={{
        maxWidth: '100%',
        backgroundColor: 'customColor.requirementBg',
        borderRadius: '10px',
        margin: '10px auto',
        padding: '20px'
      }}
    >
      <CardContent sx={{ padding: '0' }}>
        <Stack>
          <Stack direction='row' alignItems='center'>
            <Avatar
              sx={{ height: '48px', width: '48px' }}
              alt='logo'
              src={logo || placeholder}
            />
            <Typography
              color='text.primary'
              sx={{
                typography: {
                  xs: 'bodyM_2',
                  lg: 'bodyL_2'
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: {
                  xs: '170px',
                  md: '200px'
                }
              }}
            >
              Apple
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            sx={{
              direction: 'ltr',
              textOverflow: 'ellipsis',
              alignItems: 'center',
              overflow: 'hidden',
              color: 'text.natural6',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            <IconButton>
              <img src={icons.pin} alt='pin' />
            </IconButton>
            {loc}
          </Typography>
          <Typography
            sx={{
              direction: 'ltr',
              textOverflow: 'ellipsis',
              alignItems: 'center',
              overflow: 'hidden',
              color: 'text.natural6',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            <IconButton>
              <img src={icons.briefcase} alt='breifcase' />
            </IconButton>
            05 Jobs Vacancy
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: '0' }}>
        <CustomButton
          variant='secondary'
          title='See All'
          sx={{
            width: '100%',
            ':hover': {
              color: 'text.primary'
            }
          }}
        />
      </CardActions>
    </Card>
  );
};

export default FeatCompanyCard;

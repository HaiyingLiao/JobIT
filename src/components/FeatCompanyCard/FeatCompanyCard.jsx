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

const FeatCompanyCard = ({ logo, companyData }) => {
  return (
    <Card
      sx={theme => ({
        maxWidth: '100%',
        backgroundColor: 'customColor.requirementBg',
        boxShadow:
          theme.palette.mode === 'light'
            ? '0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)'
            : 'none',
        borderRadius: '10px',
        margin: '10px auto',
        padding: '20px'
      })}
    >
      <CardContent sx={{ padding: '0' }}>
        <Stack>
          <Stack direction='row' alignItems='center'>
            <Avatar
              // sx={{ height: '48px', width: '48px' }}
              sx={{
                backgroundColor: 'rgba(23, 23, 37, 0.06)',
                objectFit: 'inherit',
                borderRadius: '50%',
                width: '48px',
                height: '48px'
              }}
              alt='logo'
              src={companyData.employer_logo || placeholder}
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
                paddingLeft: '0.7rem',
                whiteSpace: 'nowrap',
                maxWidth: {
                  xs: '170px',
                  md: '200px'
                }
              }}
            >
              {companyData.employer_name}
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
            {companyData.job_city || ''}, {companyData.job_country || ''}
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
            {Math.floor(Math.random() * 9)} Jobs Vacancy
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: '0' }}>
        <CustomButton
          variant='secondary'
          title='See All'
          href={`/company/${companyData?.employer_name}`}
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

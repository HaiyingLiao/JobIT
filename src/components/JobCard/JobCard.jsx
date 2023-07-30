import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FadeIn } from '../SimilarCompany/style';
import { CustomButton } from '..';
import icons from '../../assets/icons';
import { placeholder } from '../../assets/images';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const JobCard = (props) => {
  const {
    requiredTech,
    title,
    actionButton,
    type,
    variant,
    logo,
    jobDesc,
    delay,
    jobId,
    minSalary,
    maxSalary,
  } = props;

  const homeCard = type === 'homeJobcard';
  const companyDetailCard = type === 'companyDetail';
  const slicedRequiredtech = requiredTech && requiredTech.splice(0, 3);

  return (
    <Card
      sx={{
        padding: '1.25rem',
        width: '100%',
        maxWidth: homeCard || companyDetailCard ? '400px' : '950px',
        height: '100%',
        opacity: '0',
        borderRadius: '15px',
        transition: 'opacity 500ms ease',
        animation: `${FadeIn} 1s linear ${delay}ms forwards`,
        backgroundColor: 'customColor.jobCardBg',
        boxShadow:
          '0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)',
      }}
    >
      <CardHeader
        sx={{
          paddingBottom: '1.38rem',
        }}
        avatar={
          <Box
            sx={{
              borderRadius: '10px',
              background: 'rgba(23, 23, 37, 0.06)',
            }}
          >
            <img
              loading='lazy'
              src={logo ?? placeholder}
              alt='logo'
              style={{
                objectFit: 'contain',
                width: '46px',
                height: '46px',
              }}
            />
          </Box>
        }
        title={
          <Link
            href='/'
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography
              color='text.primary'
              sx={{
                typography: {
                  xs: 'bodyM_2',
                  sm: 'bodyL_2',
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: '220px',
              }}
            >
              {title}
            </Typography>
          </Link>
        }
        subheader={
          homeCard || companyDetailCard ? (
            slicedRequiredtech?.map((tech, i) => (
              <CustomButton
                sx={{
                  marginX: '3px',
                  maxWidth: '40px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: 'left',
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                  fontSize: '10px',
                  ':hover': {
                    color: '#fff',
                  },
                }}
                variant='small'
                title={tech}
                key={i}
              />
            ))
          ) : (
            <>
              <Typography
                variant={isMobile ? 'bodyM4_3' : 'bodyM3_3'}
                color='text.secondary'
              >
                UIHUT Technologies LLC{bull}Sylhet, BD{bull}3 days ago
              </Typography>
            </>
          )
        }
        action={actionButton}
      />
      <CardContent
        sx={{
          maxHeight: '71px',
        }}
      >
        <Typography
          paragraph
          variant='bodyM_4'
          color='text.secondary'
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'wrap',
            maxHeight: '71px',
          }}
        >
          {jobDesc}
        </Typography>
      </CardContent>
      {homeCard && (
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
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
        </CardContent>
      )}
      <CardContent>
        {!companyDetailCard ||
          !homeCard ||
          slicedRequiredtech?.map((tech, i) => (
            <CustomButton
              variant='small'
              title={tech}
              key={i}
              sx={{
                margin: '3px',
                ':hover': {
                  color: '#fff',
                },
              }}
            />
          ))}
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '1.38rem',
        }}
      >
        <Box sx={{ display: 'flex', gap: '35px' }}>
          {minSalary && maxSalary ? (
            <Typography
              variant='bodyL_2'
              sx={{
                maxWidth: '150px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                typography: {
                  xs: ' bodyM_3',
                  sm: ' bodyL_2',
                },
              }}
            >
              ${minSalary}k-{maxSalary}k
              <Typography
                sx={{
                  typography: {
                    xs: 'bodyM_2',
                    sm: 'bodyL_2',
                  },
                }}
                component='span'
                color='text.secondary'
              >
                /month
              </Typography>
            </Typography>
          ) : (
            <Typography
              variant='bodyM_2'
              component='span'
              color='text.secondary'
            >
              To Be Discussed (TBD)
            </Typography>
          )}

          {!homeCard && !companyDetailCard && (
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
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          {!homeCard && !companyDetailCard && (
            <CustomButton variant='secondary' title='Message' />
          )}
          <CustomButton
            href={`/job/${jobId}`}
            variant={variant}
            title='Apply Now'
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default JobCard;

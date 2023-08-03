import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
} from '@mui/material';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import { fadeIn } from '../SimilarCompany/style';
import { CustomButton } from '..';
import icons from '../../assets/icons';
import { placeholder } from '../../assets/images';
import { formatCurrency } from '../../Utils/numberFormat';

const JobCard = (props) => {
  const {
    requiredTech = [],
    title,
    actionButton,
    type,
    variant,
    logo,
    jobDesc,
    delay,
    jobId,
    salary,
    btnText,
    currency,
    period,
  } = props;

  const homeCard = type === 'homeJobcard';
  const companyDetailCard = type === 'companyDetail';
  const slicedRequiredtech = (requiredTech && requiredTech.slice(0, 3)) || [];

  const salaries = formatCurrency(salary?.min, salary?.max, currency);
  const techLength = slicedRequiredtech.map((tech) => tech.split(' ').length);
=======
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import { CustomButton } from '..';
import icons from '../../assets/icons';
import google from '../../assets/images/google.png';

export const FadeIn = keyframes`
  0%{ 
    opacity:0; 
  }
  100%{
    opacity:1;
    }`;

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
    btnText,
  } = props;

  const homeCard = type === 'homeJobcard';
  const companyDetailCard = type === 'companyDetail';
  const slicedRequiredtech = requiredTech && requiredTech.splice(0, 3);
>>>>>>> main

  return (
    <Card
      sx={(theme) => ({
        padding: '1.25rem',
        width: '100%',
<<<<<<< HEAD
        maxWidth: {
          xs: homeCard || companyDetailCard ? '100%' : '95%',
          md: homeCard || companyDetailCard ? '100%' : '950px',
        },
=======
        maxWidth: homeCard || companyDetailCard ? '400px' : '950px',
>>>>>>> main
        height: '100%',
        opacity: '0',
        borderRadius: '15px',
        transition: 'opacity 500ms ease',
<<<<<<< HEAD
        animation: `${fadeIn} 1s linear ${delay}ms forwards`,
=======
        animation: `${FadeIn} 1s linear ${delay}ms forwards`,
>>>>>>> main
        backgroundColor: 'customColor.jobCardBg',
        boxShadow:
          theme.palette.mode === 'light'
            ? '0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)'
            : 'none',
      })}
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
<<<<<<< HEAD
              onError={(e) => (e.target.src = placeholder)}
              loading='lazy'
              src={logo ?? placeholder}
              alt='logo'
              style={{
                objectFit: 'contain',
                borderRadius: '10px',
                maxWidth: '46px',
=======
              loading='lazy'
              src={logo ?? google}
              alt='logo'
              style={{
                objectFit: 'contain',
                width: '46px',
>>>>>>> main
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
<<<<<<< HEAD
                  lg: 'bodyL_2',
=======
                  sm: 'bodyL_2',
>>>>>>> main
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
<<<<<<< HEAD
                maxWidth: {
                  xs: '200px',
                  md: '250px',
                },
=======
                maxWidth: '220px',
>>>>>>> main
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
<<<<<<< HEAD
                  maxWidth: '90px',
                  direction: 'ltr',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: 'left !important',
                  padding: '5px',
                  display: techLength > 15 ? 'inline-block' : 'inline',
                  whiteSpace: 'nowrap',
                  fontSize: '10px',
                  ':hover': {
                    color: 'text.primary',
=======
                  maxWidth: '40px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textAlign: 'left',
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                  fontSize: '10px',
                  ':hover': {
                    color: '#fff',
>>>>>>> main
                  },
                }}
                variant='small'
                title={tech}
                key={i}
              />
            ))
          ) : (
            <>
<<<<<<< HEAD
              <Typography variant='bodyM4_3' color='text.secondary'>
                UIHUT Technologies LLC{' '}
                <img src={icons.oval1} alt='oval gray icon' /> Sylhet, BD{' '}
                <img src={icons.oval1} alt='oval gray icon' /> 3 days ago
=======
              <Typography variant={'bodyM4_3'} color='text.secondary'>
                UIHUT Technologies LLC{bull}Sylhet, BD{bull}3 days ago
>>>>>>> main
              </Typography>
            </>
          )
        }
        action={actionButton}
      />
      <CardContent
        sx={{
<<<<<<< HEAD
          maxHeight: '100%',
=======
          maxHeight: '71px',
>>>>>>> main
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
<<<<<<< HEAD
            maxHeight: homeCard ? '142px' : '71px',
            height: '100%',
=======
            maxHeight: '71px',
>>>>>>> main
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
            paddingTop: '30px',
          }}
        >
          <CustomButton
            variant='small'
            title='Full time'
<<<<<<< HEAD
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px',
            }}
=======
>>>>>>> main
            startIcon={<img src={icons.briefcase} alt='briefcase' />}
          />
          <CustomButton
            variant='small'
            title='45 applied'
<<<<<<< HEAD
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px',
            }}
=======
>>>>>>> main
            startIcon={<img src={icons.people} alt='people' />}
          />
          <CustomButton
            variant='small'
            title='3 days left'
<<<<<<< HEAD
            sx={{
              maxWidth: '80px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '5px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px',
            }}
=======
>>>>>>> main
            startIcon={<img src={icons.clock} alt='clock' />}
          />
        </CardContent>
      )}
      <CardContent
        sx={{
          paddingTop: '30px',
        }}
      >
        {!companyDetailCard &&
          !homeCard &&
          slicedRequiredtech?.map((tech, i) => (
            <CustomButton
              variant='small'
              title={tech}
              key={i}
              sx={{
                margin: '3px',
                ':hover': {
                  color: 'text.primary',
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
          flexWrap: 'wrap',
          gap: '1.88rem',
        }}
      >
<<<<<<< HEAD
        <Box sx={{ display: 'flex', gap: '38px' }}>
          <Typography variant='bodyM'>
            {salaries?.min && salaries?.max
              ? `${salaries.min} - ${salaries.max}`
              : salaries}
            {period && salaries.min && salaries.max && (
              <Typography
                sx={{
                  typography: 'bodyM',
=======
        <Box sx={{ display: 'flex', gap: '35px' }}>
          {minSalary && maxSalary ? (
            <Typography
              variant='bodyL_2'
              sx={{
                maxWidth: '160px',
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
>>>>>>> main
                }}
                component='span'
                color='text.secondary'
              >
                /{period.toLowerCase()}
              </Typography>
            )}
          </Typography>

          {!homeCard && !companyDetailCard && (
            <Typography
              variant='bodyL_2'
              sx={{
                width: {
                  xs: '100px',
                  sm: '100%',
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              54{' '}
              <Typography
                component='span'
                color='text.secondary'
                sx={{
                  typography: {
                    xs: 'bodyM_3',
                    sm: 'bodyL_3',
                  },
                }}
              >
                People Applied
              </Typography>
            </Typography>
<<<<<<< HEAD
          )}
        </Box>

=======
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
            <Typography
              variant='bodyL_2'
              sx={{
                width: {
                  xs: '100px',
                  sm: '100%',
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              54{' '}
              <Typography
                component='span'
                color='text.secondary'
                sx={{
                  typography: {
                    xs: 'bodyM_3',
                    sm: 'bodyL_3',
                  },
                }}
              >
                People Applied
              </Typography>
            </Typography>
          )}
        </Box>

>>>>>>> main
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            width: {
              xs: '100%',
              sm: 'auto',
            },
          }}
        >
          {!homeCard && !companyDetailCard && (
            <CustomButton
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
              variant='secondary'
              title='Message'
            />
          )}
          <CustomButton
            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },
            }}
            href={`/job/${jobId}`}
            variant={variant}
            title={btnText}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default JobCard;

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  keyframes
} from '@mui/material';
import { Link } from 'react-router-dom';

import { CustomButton } from '..';
import icons from '../../assets/icons';
import { placeholder } from '../../assets/images';
import { handleFalsy } from '../../Utils/TestingTool/dataCleaningTool';

export const FadeIn = keyframes`0%{ 
    opacity:0 
  }
  100%{
    opacity:1
    }`;

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const JobCard = props => {
  const {
    requiredTech,
    title,
    actionButton,
    minSalary,
    maxSalary,
    type,
    variant,
    logo,
    jobDesc,
    delay,
    jobId,

    btnText
  } = props;

  const homeCard = type === 'homeJobcard';
  const companyDetailCard = type === 'companyDetail';
  const slicedRequiredtech = requiredTech && requiredTech.splice(0, 3);

  return (
    <Card
      className='jobcard'
      sx={theme => ({
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
          theme.palette.mode === 'light'
            ? '0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)'
            : 'none'
      })}
    >
      <CardHeader
        sx={{
          paddingBottom: '1.38rem'
        }}
        avatar={
          <Box
            sx={{
              borderRadius: '10px',
              background: 'rgba(23, 23, 37, 0.06)'
            }}
          >
            <img
              loading='lazy'
              src={handleFalsy(logo, placeholder)}
              alt='logo'
              style={{
                objectFit: 'contain',
                width: '46px',
                height: '46px'
              }}
            />
          </Box>
        }
        title={
          <Link
            href='/'
            style={{
              textDecoration: 'none'
            }}
          >
            <Typography
              color='text.primary'
              sx={{
                typography: {
                  xs: 'bodyM_2',
                  sm: 'bodyL_2'
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: '220px'
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
                    color: 'text.primary'
                  }
                }}
                variant='small'
                title={tech}
                key={i}
              />
            ))
          ) : (
            <>
              <Typography variant={'bodyM4_3'} color='text.secondary'>
                UIHUT Technologies LLC{bull}Sylhet, BD{bull}3 days ago
              </Typography>
            </>
          )
        }
        action={actionButton}
      />
      <CardContent
        sx={{
          maxHeight: '71px'
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
            maxHeight: '71px'
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
            paddingTop: '30px'
          }}
        >
          <CustomButton
            variant='small'
            title='Full time'
            sx={{
              maxWidth: '70px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '3px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            startIcon={<img src={icons.briefcase} alt='briefcase' />}
          />
          <CustomButton
            variant='small'
            sx={{
              maxWidth: '70px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '3px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            title='45 applied'
            startIcon={<img src={icons.people} alt='people' />}
          />
          <CustomButton
            variant='small'
            sx={{
              maxWidth: '70px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              textAlign: 'left',
              padding: '3px 10px',
              whiteSpace: 'nowrap',
              fontSize: '10px'
            }}
            title='3 days left'
            startIcon={<img src={icons.clock} alt='clock' />}
          />
        </CardContent>
      )}
      <CardContent
        sx={{
          paddingTop: '30px'
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
                  color: 'text.primary'
                }
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
          gap: '1.88rem'
        }}
      >
        <Box sx={{ display: 'flex', gap: '35px' }}>
          {minSalary !== 0 && maxSalary !== 0 ? (
            <Typography
              variant='bodyL_2'
              sx={{
                maxWidth: '160px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                typography: {
                  xs: ' bodyM_3',
                  sm: ' bodyL_2'
                }
              }}
            >
              {minSalary}-{maxSalary}
              <Typography
                sx={{
                  typography: {
                    xs: 'bodyM_2',
                    sm: 'bodyL_2'
                  }
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
              TBD
            </Typography>
          )}

          {!homeCard && !companyDetailCard && (
            <Typography
              variant='bodyL_2'
              sx={{
                width: {
                  xs: '100px',
                  sm: '100%'
                },
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              54{' '}
              <Typography
                component='span'
                color='text.secondary'
                sx={{
                  typography: {
                    xs: 'bodyM_3',
                    sm: 'bodyL_3'
                  }
                }}
              >
                People Applied
              </Typography>
            </Typography>
          )}
        </Box>

        {/* {minSalary && maxSalary ? (
          <Typography
            variant='bodyL_2'
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              typography: {
                xs: ' bodyM_3',
                sm: ' bodyL_2'
              }
            }}
          >
            {minSalary}k-{maxSalary}k
            <Typography
              sx={{
                typography: {
                  xs: 'bodyM_2',
                  sm: 'bodyL_2'
                }
              }}
              component='span'
              color='text.secondary'
            >
              /month
            </Typography>
          </Typography>
        ) : (
          <Typography variant='bodyM_2' component='span' color='text.secondary'>
            TBD
          </Typography>
        )} */}

        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            width: {
              xs: '100%',
              sm: 'auto'
            }
          }}
        >
          {!homeCard && !companyDetailCard && (
            <CustomButton
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto'
                }
              }}
              variant='secondary'
              title='Message'
            />
          )}
          <CustomButton
            sx={{
              width: {
                xs: '100%',
                sm: 'auto'
              }
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

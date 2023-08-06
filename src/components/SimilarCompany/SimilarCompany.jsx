import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import icons from '../../assets/icons';
import { fadeIn } from './style';
import { placeholder } from '../../assets/images';

export default function SimilarCompany({
  delay,
  companyName,
  logo,
  companyType
}) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const array = [1, 2, 3, 4, 5, 6]
    .map(num => num)
    .sort((a, b) => a - b)
    .slice(0, 3);
  return (
    <Box
      sx={{
        width: '100% !important',
        height: isMobile ? '100%' : '78px',
        opacity: '0',
        transition: 'opacity 500ms ease-in',
        animation: `${fadeIn} 1s linear ${delay}ms forwards`,
        borderRadius: '10px',
        backgroundColor: 'customColor.requirementBg',
        display: 'flex',
        gap: '1rem',
        minWidth: {
          xs: '100%',
          md: '350px'
        }
      }}
    >
      <Link
        to={`/company/${companyName}`}
        style={{
          display: 'flex',
          gap: '1rem',
          width: '100%',
          padding: '1.25rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          textDecoration: 'none',
          color: 'text.primary'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <img
            src={logo ?? placeholder}
            alt={`${companyName} logo`}
            width={50}
            height={50}
            style={{
              backgroundColor: 'rgba(23, 23, 37, 0.06)',
              objectFit: 'cover',
              borderRadius: '10px',
              maxWidth: '46px',
              height: '46px',
              aspectRatio: '1/1',
              padding: '5px'
            }}
          />

          <div>
            <Typography
              sx={{
                typography: {
                  xs: 'bodyM_3',
                  sm: 'bodyL_2'
                },
                color: 'text.primary',
                maxWidth: {
                  xs: '100px',
                  sm: '300px',
                  md: '450px',
                  lg: '100px'
                },
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {companyName}
            </Typography>
            <Typography
              component='span'
              sx={{
                typography: 'bodyM3_3',
                color: 'text.secondary',
                fontWeight: '400'
              }}
            >
              {companyType}
            </Typography>
          </div>
        </Box>
        <CustomButton
          variant='primaryOutlined'
          title='Follow'
          sx={{
            minWidth: '6.125rem',
            padding: '0.375rem 0.625rem',
            width: isMobile ? '100%' : 'auto'
          }}
          startIcon={<img src={icons.plus} alt='plus icon' />}
        />
      </Link>
    </Box>
  );
}

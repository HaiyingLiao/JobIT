import { Typography, Box, useMediaQuery } from '@mui/material';

import { CardTitleWrapper, ButtonWrapper, MoreButton, Wrapper } from './style';
import Requirement from './Requirement';
import { CustomButton } from '..';
import icons from '../../assets/icons';

export default function JobInfo({
  title,
  company,
  JobUrlData,
  companyAddress,
  data
}) {
  const isMobile = useMediaQuery('(max-width:792px)');

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Wrapper
        wrap={'false'}
        width='100%'
        justifyContent={isMobile ? 'start' : 'space-between'}
      >
        <CardTitleWrapper>
          <div>
            <Typography
              variant='h2'
              sx={{
                typography: {
                  xs: 'bodyM',
                  sm: 'h2'
                }
              }}
            >
              {title}
            </Typography>
            <Typography
              paragraph
              color='text.secondary'
              sx={{
                typography: {
                  xs: 'bodyM4_4',
                  sm: 'bodyM_3'
                },
                lineHeight: '32px'
              }}
            >
              {company} <img src={icons.oval1} alt='oval gray icon' />{' '}
              {companyAddress} <img src={icons.oval1} alt='oval gray icon' /> 3
              days ago
            </Typography>
          </div>
          <MoreButton>
            <img
              style={{ marginTop: '3px', objectFit: 'contain' }}
              src={icons.icSaved}
              alt='bookmark icon'
              width={20}
              height={20}
            />
            {isMobile && <img src={icons.moreVertical} alt='more icon' />}
          </MoreButton>
        </CardTitleWrapper>
        {!isMobile && (
          <ButtonWrapper>
            <CustomButton
              variant='primary'
              title='Apply Now'
              href={JobUrlData}
              target='_blank'
            />
            <CustomButton variant='secondaryOutlined' title='Message' />
            <MoreButton>
              <img src={icons.moreVertical} alt='more icon' />
            </MoreButton>
          </ButtonWrapper>
        )}
        <Requirement data={data} />
        {isMobile && (
          <Box sx={{ display: 'flex', gap: '5px', marginTop: '10px' }}>
            <CustomButton
              variant='primary'
              title='Apply Now'
              href={JobUrlData}
              target='_blank'
              sx={{ minWidth: '136px' }}
            />
            <CustomButton
              variant='secondaryOutlined'
              title='Message'
              sx={{ minWidth: '136px' }}
            />
          </Box>
        )}
      </Wrapper>
    </div>
  );
}

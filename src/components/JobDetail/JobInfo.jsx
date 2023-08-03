import { Typography } from '@mui/material';

import { CardTitleWrapper, ButtonWrapper, MoreButton, Wrapper } from './style';
import Requirement from './Requirement';
import { CustomButton } from '..';
import icons from '../../assets/icons';

export default function JobInfo({ title, address }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <Wrapper wrap={'true'} width='100%' justifyContent='space-between'>
        <CardTitleWrapper>
          <div>
            <Typography
              variant='h2'
              sx={{
                typography: {
                  xs: 'bodyM',
                  sm: 'h2',
                },
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
                  sm: 'bodyM_3',
                },
                lineHeight: '32px',
              }}
            >
              {address} - 3 days ago
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
          </MoreButton>
        </CardTitleWrapper>
        <ButtonWrapper>
          <CustomButton
            variant='primary'
            title='Apply Now'
            sx={{
              width: {
                xs: '100%',
                md: 'auto',
              },
            }}
          />
          <CustomButton
            variant='primaryOutlined'
            title='Message'
            sx={{
              width: {
                xs: '100%',
                md: 'auto',
              },
            }}
          />
        </ButtonWrapper>
        <MoreButton>
          <img src={icons.moreVertical} alt='more icon' />
        </MoreButton>
        <Requirement />
      </Wrapper>
    </div>
  );
}

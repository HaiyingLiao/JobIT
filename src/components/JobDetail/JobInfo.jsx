import { Typography } from '@mui/material';

import { CardTitleWrapper, ButtonWrapper, MenuBtn, Wrapper } from './style';
import Requirement from './Requirement';
import { CustomButton } from '..';
import icons from '../../assets/icons';

export default function CardTitle({ title, address }) {
  const isWrap = 'true';

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Wrapper wrap={isWrap}>
        <CardTitleWrapper>
          <div>
            <Typography
              variant='h2'
              mt={3}
              sx={({ breakpoints }) => ({
                [breakpoints.down('sm')]: {
                  fontSize: '1rem',
                },
              })}
            >
              {title}
            </Typography>
            <Typography
              variant='bodyM_2'
              color='text.secondary'
              sx={({ breakpoints }) => ({
                [breakpoints.down('sm')]: {
                  fontSize: '0.8125rem',
                  fontWeight: '500',
                },
              })}
            >
              {address}
            </Typography>
          </div>
          <MenuBtn>
            <img
              src={icons.icSaved}
              alt='bookmark icon'
              width={20}
              height={20}
            />
          </MenuBtn>
        </CardTitleWrapper>
        <ButtonWrapper>
          <CustomButton variant='primary' title='Apply Now' />
          <CustomButton variant='primaryOutlined' title='Message' />
        </ButtonWrapper>
        <MenuBtn>
          <img src={icons.moreVertical} alt='more icon' />
        </MenuBtn>
        <Requirement />
      </Wrapper>
    </div>
  );
}

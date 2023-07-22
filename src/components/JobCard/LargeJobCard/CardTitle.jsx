import { Typography } from '@mui/material';

import {
  CardContentInner,
  CardTitleWrapper,
  ButtonWrapper,
  MenuBtn,
} from './largeCardStyle';
import Requirement from './Requirement';
import { CustomButton } from '../../';
import icons from '../../../assets/icons';

export default function CardTitle({ title, address }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CardContentInner>
        <CardTitleWrapper>
          <div>
            <Typography
              variant='h2'
              mt={3}
              sx={({ breakpoints }) => ({
                [breakpoints.down('sm')]: {
                  fontSize: '1rem',
                },
                [breakpoints.up('md')]: {
                  fontSize: '2rem',
                },
              })}
            >
              {title}
            </Typography>
            <Typography
              variant='subtitle2'
              color={'text.secondary'}
              sx={({ breakpoints }) => ({
                fontWeight: '400',
                [breakpoints.down('sm')]: {
                  fontSize: '0.9rem',
                },
                [breakpoints.up('md')]: {
                  fontSize: '1rem',
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
      </CardContentInner>
    </div>
  );
}

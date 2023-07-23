import { Typography } from '@mui/material';

import { CustomButton } from '..';
import icons from '../../assets/icons';
import { Wrapper } from './style';
import Title from './Title';

export default function CompanyDesc({
  logo,
  companyName,
  companydesc,
  followers,
}) {
  return (
    <div>
      <Title title='About The Company' />
      <div>
        <Wrapper wrap={'true'}>
          <Wrapper gap='8px'>
            <img src={logo} width={60} height={60} />
            <div style={{ padding: '5px', marginTop: '16px' }}>
              <Typography
                variant='bodyL'
                sx={({ breakpoints }) => ({
                  [breakpoints.down('sm')]: {
                    fontSize: '1rem',
                  },
                })}
              >
                {companyName}
              </Typography>
              <Typography
                paragraph
                color={'text.secondary'}
                variant='bodyM_3'
                sx={({ breakpoints }) => ({
                  [breakpoints.down('sm')]: {
                    fontSize: '0.9375rem',
                    fontWeight: '500',
                  },
                })}
              >
                {followers} Followers
              </Typography>
            </div>
          </Wrapper>
          <CustomButton
            variant='primaryOutlined'
            title={'Follow'}
            startIcon={<img src={icons.plus} alt='plus icon' />}
          />
        </Wrapper>
        <Typography
          paragraph
          variant='bodyM_3'
          color='text.secondary'
          pt={2}
          sx={({ breakpoints }) => ({
            [breakpoints.down('sm')]: {
              fontSize: '0.875rem',
              fontWeight: '400',
            },
          })}
        >
          {companydesc}
        </Typography>
      </div>
    </div>
  );
}

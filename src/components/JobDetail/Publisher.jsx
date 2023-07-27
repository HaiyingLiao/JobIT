import { Typography } from '@mui/material';

import { CustomButton } from '..';
import icons from '../../assets/icons';
import { Wrapper } from './style';

export default function CompanyDesc({
  logo,
  companyName,
  companydesc,
  followers,
}) {
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography
        variant='bodyL'
        color='text.primary'
        sx={{
          typography: {
            xs: 'bodyM',
            sm: 'bodyL',
          },
        }}
      >
        About the company
      </Typography>
      <div>
        <Wrapper wrap={'true'} width='100%' justifyContent='space-between'>
          <Wrapper gap='8px'>
            <img src={logo} width={60} height={60} />
            <div style={{ padding: '5px', marginTop: '16px' }}>
              <Typography
                variant='h5'
                sx={{
                  typography: {
                    xs: 'bodyM_2',
                    sm: 'bodyL',
                  },
                }}
              >
                {companyName}
              </Typography>
              <Typography
                paragraph
                color='text.secondary'
                sx={{
                  typography: {
                    xs: 'bodyM2_3',
                    sm: 'bodyM_2',
                  },
                }}
              >
                {followers} Followers
              </Typography>
            </div>
          </Wrapper>
          <CustomButton
            variant='primaryOutlined'
            title='Follow'
            startIcon={<img src={icons.plus} alt='plus icon' />}
          />
        </Wrapper>
        <Typography
          paragraph
          color='text.secondary'
          pt={2}
          sx={{ typography: 'bodyM_4' }}
        >
          {companydesc}
        </Typography>
      </div>
    </div>
  );
}

import { Container, Typography } from '@mui/material';

import { CustomButton } from '../../';
import icons from '../../../assets/icons';
import { Wrapper } from './largeCardStyle';

export default function CompanyDesc({
  logo,
  companyName,
  companydesc,
  followers,
}) {
  return (
    <Container>
      <Typography
        variant='h4'
        pt={5}
        sx={{ fontSize: '1.1rem', fontWeight: '700' }}
      >
        About The Company
      </Typography>
      <div>
        <Wrapper wrap>
          <Wrapper>
            <img src={logo} width={64} height={64} />
            <div style={{ padding: '5px', marginTop: '16px' }}>
              <Typography
                variant='h4'
                sx={{ fontSize: '1.1rem', fontWeight: '700' }}
              >
                {companyName}
              </Typography>
              <Typography
                paragraph
                color={'text.secondary'}
                fontSize={'0.8rem'}
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
          color={'text.secondary'}
          fontSize={'0.8rem'}
          pt={2}
        >
          {companydesc}
        </Typography>
      </div>
    </Container>
  );
}

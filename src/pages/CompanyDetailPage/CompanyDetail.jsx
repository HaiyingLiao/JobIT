import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import {
  CompanyDetail,
  CustomButton,
  Loader,
  NotFound,
  ServerError,
  SimilarCompany,
} from '../../components';
import icons from '../../assets/icons';
import { useGetCompanyDetailQuery } from '../../services/JSearh';

export default function CompanyDetailPage() {
  const { name } = useParams();
  const { isError, isFetching, data } = useGetCompanyDetailQuery(name);

  const navigate = useNavigate();

  if (isFetching) return <Loader />;

  if (data?.data?.length < 1) return <NotFound />;

  if (isError) return <ServerError />;
  const company = data.data.filter(
    (company) => company.employer_company_type !== null
  );
  console.log(company);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'customColor.pageBG',
        padding: {
          xs: ' 8px',
          sm: ' 30px',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '90rem',
          },
          paddingTop: '100px',
          margin: '0 auto',
        }}
      >
        <CustomButton
          onClick={() => navigate(-1)}
          title='Back'
          variant='small'
          sx={{
            marginLeft: '10px ',
            marginBottom: '20px',
            ':hover': {
              color: '#fff',
            },
          }}
          startIcon={
            <img
              alt='arrow icon'
              src={icons.cheveron}
              style={{
                transform: 'rotate(90deg)',
              }}
            />
          }
        />
        <Box
          sx={{
            display: 'flex',
            flexWrap: {
              xs: 'wrap',
              lg: 'nowrap',
            },
            width: '100%',
            gap: '40px',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <CompanyDetail
              companyImage={data?.data[0]?.employer_logo}
              recentJobs={data?.data}
              city={data?.data[0]?.job_city}
              country={data?.data[0]?.job_country}
              companyName={data?.data[0]?.employer_name}
              companyType={data?.data[0]?.employer_companype}
              naicsName={data?.data[0]?.job_naics_name}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: 'customColor.jobCardBg',
              borderRadius: '10px',
              height: '100%',
              minHeight: '36rem',
              padding: '10px',
              width: {
                xs: '100%',
                lg: 'fit-content',
              },
            }}
          >
            <Typography
              sx={{
                typography: 'h4',
                padding: '5px',
              }}
            >
              Similar companies
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((company, i) => (
                <SimilarCompany
                  key={company}
                  companyName={data?.data[0]?.empoyer_name}
                  delay={i * 200}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

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
import {
  useGetCompanyDetailQuery,
  useGetJobListingsQuery,
} from '../../services/JSearch';

export default function CompanyDetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isError, isFetching, data } = useGetCompanyDetailQuery(name);

  const compantyTypes = data?.data
    ?.filter((job) => job?.employer_company_type !== null)
    .map((company) => company?.employer_company_type);

  const {
    isError: similarCompaniesError,
    data: similarCompanies,
    isFetching: similarCompaniesIsFetching,
  } = useGetJobListingsQuery({
    query: compantyTypes && compantyTypes[0],
    page: '1',
    num_pages: '1',
  });

  if (isFetching || similarCompaniesIsFetching) return <Loader />;

  if (data?.data?.length < 1) return <NotFound />;

  if (isError || similarCompaniesError) return <ServerError />;

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
              padding: '15px',
              width: {
                xs: '100%',
                lg: 'fit-content',
              },
            }}
          >
            <Typography
              sx={{
                typography: 'h4',
                paddingBottom: '20px',
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
              {similarCompanies?.data?.map((company, i) => (
                <SimilarCompany
                  key={company?.job_id}
                  companyName={company?.employer_name}
                  delay={i * 200}
                  logo={company?.employer_logo}
                  companyType={company?.employer_company_type}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

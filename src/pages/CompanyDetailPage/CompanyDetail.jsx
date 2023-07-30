import { Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  CompanyDetail,
  CustomButton,
  Loader,
  NotFound,
  ServerError,
  SimilarCompany,
} from '../../components';
import icons from '../../assets/icons';

export default function CompanyDetailPage() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const navigate = useNavigate();

  // this function and state will replace later when redux setup is ready
  const getCompanyDetails = async (params) => {
    const options = {
      url: 'https://jsearch.p.rapidapi.com/search',
      method: 'GET',
      params: {
        query: params,
        page: '1',
        num_pages: '1',
        date_posted: 'all',
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_JSEARCH_KEY,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      const { data } = await response.data;
      setResponse(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompanyDetails(name);
  }, [name]);

  if (loading) return <Loader />;

  if (response.length < 1) return <NotFound />;

  if (error) return <ServerError />;

  return (
    <Box
      sx={{
        maxWidth: '90rem',
        margin: '0 auto',
        padding: {
          xs: '100px 5px',
          sm: '100px 30px',
        },
        backgroundColor: 'customColor.pageBG',
      }}
    >
      <div>
        <CustomButton
          onClick={() => navigate(-1)}
          title='Back'
          variant='small'
          sx={{
            marginLeft: '15px',
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
            gap: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <CompanyDetail
              companyImage={response[0]?.employer_logo}
              recentJobs={response}
              city={response[0]?.job_city}
              country={response[0]?.job_country}
              companyName={response[0]?.employer_name}
              companyType={response[0]?.employer_companype}
              naicsName={response[0]?.job_naics_name}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: 'customColor.jobCardBg',
              borderRadius: '10px',
              height: '100%',
              minHeight: '36rem',
              padding: '15px 20px',
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
                  companyName={response[0].empoyer_name}
                  delay={i * 200}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

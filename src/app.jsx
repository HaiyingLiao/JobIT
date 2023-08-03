import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { Box } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { Navbar } from './components';

import {
  Home,
  JobSearchPage,
  EstimatedSalary,
  JobDetailPage,
  CompanyDetail,
} from './pages';

import './app.css';
import { darkTheme, lightTheme } from './theme';
import NotFound from './components/Error/NotFound/NotFound';

export default function App() {
  const mode = useSelector((state) => state.theme.value);
  const theme = mode ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Box
          className='mainContainer'
          sx={{
            height: '100%',
            width: '100%',
            margin: '0 auto',
            backgroundColor: 'customColor.pageBG',
          }}
        >
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/job-search' element={<JobSearchPage />} />
            <Route
              exact
              path='/job-detail/:jobId'
              element={<JobDetailPage />}
            />
            <Route
              exact
              path='/estimated-salary'
              element={<EstimatedSalary />}
            />

            <Route path='/company/:name' element={<CompanyDetail />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Box>

        <Toaster />
      </ThemeProvider>
    </>
  );
}

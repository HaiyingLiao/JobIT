import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { Box } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { Navbar } from './components';
import { Home, JobSearch, EstimatedSalary, JobDetailPage } from './pages';
import './app.css';
import { darkTheme, lightTheme } from './theme';

export default function App() {
  const mode = useSelector(state => state.theme.value);
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
            padding: '0 2.5%',
            backgroundColor: 'customColor.pageBG'
          }}
        >
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/job-search' element={<JobSearch />} />
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
          </Routes>
        </Box>

        <Toaster />
      </ThemeProvider>
    </>
  );
}

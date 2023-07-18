import { useState } from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { InputValidation, Navbar, SwitchButton } from './components';
import { Home, JobSearch, EstimatedSalary } from './pages';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeSec = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={themeSec}>
      <>
        <CssBaseline />
        <SwitchButton checkMode={darkMode} changeMode={handleChange} />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/job-search' element={<JobSearch />} />
          <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
        </Routes>
        <InputValidation />
      </>
    </ThemeProvider>
  );
}

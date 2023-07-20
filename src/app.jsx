import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import // CssBaseline,
// createTheme,
// ThemeProvider
'@mui/material';

import {
  InputValidation,
  Navbar,
  // SwitchButton
} from './components';
import { Home, JobSearch, EstimatedSalary } from './pages';
import { ColorModeContext } from './Utils/ColorMode';
import './app.css';

export default function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const themeSec = createTheme({
  //   palette: {
  //     mode: darkMode ? 'dark' : 'light',
  //   },
  // });

  // const handleChange = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  const [name, setName] = useState('Suraj Arya');

  return (
    // <ThemeProvider theme={themeSec}>
    <>
      <ColorModeContext.Provider value={{ name, setName }}>
        ;{/* <SwitchButton checkMode={darkMode} changeMode={handleChange} /> */}
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/job-search' element={<JobSearch />} />
          <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
        </Routes>
        <InputValidation />
      </ColorModeContext.Provider>
    </>
    // </ThemeProvider>
  );
}

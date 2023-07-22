import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { InputValidation, Navbar, SwitchButton } from './components';
import { Home, JobSearch, EstimatedSalary } from './pages';
import { darkTheme, lightTheme } from './theme';
import './app.css';

export default function App() {
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	const theme = isDarkMode ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<>
				<CssBaseline />
				<SwitchButton checkMode={isDarkMode} changeMode={toggleDarkMode} />
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/job-search' element={<JobSearch />} />
					<Route exact path='/estimated-salary' element={<EstimatedSalary />} />
				</Routes>
				{/* <InputValidation /> */}
			</>
		</ThemeProvider>
	);
}

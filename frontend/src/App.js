import React from 'react';
import Shop from './components/Shop/App'
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import LoginPage from './scenes/loginPage';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Blogs from './components/Blogs';


function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
	<div className="app">
		<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
		<Routes>
			<Route path="/" element={<Shop />} />
			<Route path="/blog" element={<Blogs />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
		</ThemeProvider>
		</BrowserRouter>
	</div>
	);
}

export default App;

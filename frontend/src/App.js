import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Dashbourd from './components/Dashbourd';

function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
	<div className="app">
		<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
		<Routes>
		<Route path="/" element={<Main/>} />
		<Route path="/dashbourd" element={<Dashbourd/>} />
		</Routes>
		</ThemeProvider>
		</BrowserRouter>
	</div>
	);
}

export default App;

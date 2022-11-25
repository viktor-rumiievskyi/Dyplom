import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import LoginPage from './scenes/loginPage';
import RegistrationPage from './scenes/RegistrationPage';
import HomePage from './scenes/HomePage';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	const isAuth = Boolean(useSelector((state) => state.token));
	return (
	<div className="app">
		<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/" element={<RegistrationPage />} />
			<Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
		</Routes>
		</ThemeProvider>
		</BrowserRouter>
	</div>
	);
}

export default App;

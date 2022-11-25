import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import LoginPage from './scenes/loginPage';
import RegistrationPage from './scenes/RegistrationPage';

function App() {
	return (
	<div className="app">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/" element={<RegistrationPage />} />
		</Routes>
		</BrowserRouter>
	</div>
	);
}

export default App;

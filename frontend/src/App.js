import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import LoginPage from './scenes/loginPage';

function App() {
	return (
	<div className="app">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
		</Routes>
		</BrowserRouter>
	</div>
	);
}

export default App;

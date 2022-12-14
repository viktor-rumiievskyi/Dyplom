const userService = require('../service/user-service');
const{validationResult} = require('express-validator');
const apiError = require('../exceptions/api-error');
const ApiError = require('../exceptions/api-error');


class UserController {

	
	//Registration
	async registration(req, res, next) {
			try {
				const errors = validationResult(req);
				if(!errors.isEmpty()) {
					return next(ApiError.BadRequest('Błąd walidacji', errors.array()))
				}
					const {email, password} = req.body;
					const userData = await userService.registration(email, password);
					res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
					return res.json(userData);
			} catch (e) {
					next(e);
			}
	}

//Login
	async login(req, res, next) {
		try {
				const {email, password} = req.body;
				const userData = await userService.login(email, password);
				res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
				return res.json(userData);
		} catch (e) {
				next(e);
		}
}

//Logout
async logout(req, res, next ) {
	try {
		const {refreshToken} = req.cookies;
		const token = await userService.logout(refreshToken);
		res.clearCookie('refreshToken');
		return res.json(token);
	}catch (e) {
		next(e);
	}
}

async activatet(req, res, next ) {
	try {

	}catch (e) {
		next(e);
	}
}


//Refresh
async refresh(req, res, next ) {
	try {
		const {refreshToken} = req.cookies;
		const userData = await userService.refresh(refreshToken);
					res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
					return res.json(userData);
	}catch (e) {
		next(e);
	}
}

}


module.exports = new UserController();

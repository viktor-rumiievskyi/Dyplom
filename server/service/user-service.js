const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');


class UserService {

//Registration
	async registration(email, password) {
			const candidate = await UserModel.findOne({email})
			if (candidate) {
					throw ApiError.BadRequest(`Użytkownik z adresem pocztowym  ${email} już istnieje`)
			}
			const hashPassword = await bcrypt.hash(password, 3);
			const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

			const user = await UserModel.create({email, password: hashPassword, activationLink})
			await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

			const userDto = new UserDto(user); // id, email, isActivated
			const tokens = tokenService.generateTokens({...userDto});
			await tokenService.saveToken(userDto.id, tokens.refreshToken);

			return {...tokens, user: userDto}
		}


//Login
		async login(email, password) {
			const user = await UserModel.findOne({email})
			if (!user) {
					throw ApiError.BadRequest('Nie znaleziono użytkownika z tym adresem e-mail')
			}
			const isPassEquals = await bcrypt.compare(password, user.password);
			if (!isPassEquals) {
					throw ApiError.BadRequest('Nieprawidłowe hasło');
			}
			const userDto = new UserDto(user);
			const tokens = tokenService.generateTokens({...userDto});

			await tokenService.saveToken(userDto.id, tokens.refreshToken);
			return {...tokens, user: userDto}
	}



//Logout
	async logout(refreshToken) {
	const token = await tokenService.removeToken(refreshToken);
	return token;
	}


	//Refresh
	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError();
		}
		const user = await UserModel.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {...tokens, user: userDto}
	}
}

module.exports =  new UserService();
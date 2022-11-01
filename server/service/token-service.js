const UserModel = require('../models/user-models');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');

class TokenService {
	async registration(email, password) {
		const candidate = await UserModel.findOne({email})
		if (candidate) {
			throw new Error (`Użytkownik z adresem pocztowym ${email} już istnieje`)
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink =  uuid.v4();
		const user = await UserModel.create({email, password: hashPassword, activationLink});
		await mailService.sendActivationMail(mail, activationLink);
	}
}

module.exports =  new TokenService();
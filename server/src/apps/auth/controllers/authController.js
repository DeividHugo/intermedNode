const { Request, Response } = require('express');
const authService = require('../services/authService')
const AuthError = require('../exceptions/authError');

class AuthController {
    async create(req, res) {
        const { email, password } = req.body;

        try {
            const { user, token } = await authService.signIn(email, password);
            return res.status(200).json({ user, token });

        } catch (error) {
            if (error instanceof AuthError) {
                return res.status(401).send();
            }
            return res.status(500).json({error});
        }
    }
}

module.exports = new AuthController();

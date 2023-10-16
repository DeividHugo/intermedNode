const User = require('../../vehicleSpot/models/user'); 
const jwt = require('jsonwebtoken');
const AuthError = require('../exceptions/authError');
const config = require('../config/jwtConfig');

class AuthService {
    async signIn(email, password) {
        try {
            const user = await User.findOne({
                where: {
                    email: email,
                    password: password,
                },
            });

            if (!user) {
                throw new AuthError('Invalid credentials');
            }

            const { id, name } = user;

            const token = jwt.sign({ id }, config.auth.secret, {
                expiresIn: config.auth.expiresIn,
            });

            return {
                user: {
                    id,
                    name,
                    email,
                },
                token,
            };
        } catch (error) {
            throw new AuthError('Authentication failed');
        }
    }

    async validateToken(token) {
        try {
            
            const decoded = jwt.verify(token, config.auth.secret);
    
            return decoded.id;
        } catch (error) {
            throw new AuthError('Invalid token');
        }
    }
    
}

module.exports = new AuthService();

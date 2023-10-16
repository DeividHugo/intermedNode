const authService = require("../services/authService");
const AuthError = require("../exceptions/authError");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const id = await authService.validateToken(token);

        req.user = { id, token };
        next();
    } catch (error) {
        console.log(error)
        if (error instanceof AuthError) {
            return res.status(401).send();
        }

        return res.status(500).send();
    }
};

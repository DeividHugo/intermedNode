module.exports = {
    auth: {
        secret: process.env.AUTH_SECRET || 'secret',
        expiresIn: process.env.AUTH_EXPIRES_IN || '7d',
    }
};

const secret = process.env.KEY;

module.exports = {
    jwtSecret: secret,
    jwtSession: {
        session: false
    }
}
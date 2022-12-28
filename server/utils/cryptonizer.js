const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

exports.encryptPassword = async function (password) {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(password, salt);

        return {
            hash: salt,
            hashedPassword: hash
        }
    } catch (err) {
        console.error(err)
    }
}
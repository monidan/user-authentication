const { getFirestore } = require('firebase-admin/firestore');

const cryptonizer = require('../utils/cryptonizer');

class UserController {
    constructor() {
        this._db = getFirestore();
    }

    /**
     * 
     * @param {Request} request 
     * @param {import('fastify/types/utils').ReplyDefault} reply 
     */
    async signUp(request, reply) {
        const body = request.body === JSON.stringify(request.body)
            ? JSON.parse(request.body)
            : request.body;

        const {
            name,
            surname,
            email,
            password
        } = body;

        if (await this.isUserExists(email)) {
            reply.code(400).send({ data: 'User already exists!' });
            return;
        }

        const {
            hash,
            hashedPassword
        } = await cryptonizer.encryptPassword(password);

        await this._db.collection('users')
            .add({
                name,
                surname,
                email,
                password: hashedPassword,
                hash,
            })

        reply.code(200).send({ data: 'hello' });
    }

    logIn() {

    }

    /**
     * Checks in database if user exists already
     * @param {String} email 
     */
    async isUserExists(email) {
        const foundUser = await this._db.collection('users').where('email', '==', email).get();

        return !!foundUser.docs.length;
    }
}

module.exports = UserController;
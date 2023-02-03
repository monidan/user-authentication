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
        const body = typeof request.body === 'string'
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

    async logIn(request, reply) {
        const { authorization } = request.headers;
        const [
            email,
            password
        ] = Buffer.from(authorization.split('Basic ')[1], 'base64')
                .toString('ascii')
                .split(':');

        try {
            const userCollection = await this._db.collection('users').where('email', '==', email).get();
            
            if (!userCollection.docs.length) throw Error('This user does not exist!');

            const user = userCollection.docs[0].data();
            const cleanUser = {
                name: user.name,
                surname: user.surname,
                email: user.email,
            };

            const result = await this.comparePasswords(password, user);
            
            if (result) reply.code(200).send({ authToken: '123123', userData: cleanUser });
            else reply.code(400).send({ msg: 'Wrong password!' });
        } catch (err) {
            reply.code(400).send({ msg: err.message });
        }
    }

    async comparePasswords(password, user) {
        try {
            const { hashedPassword } = await cryptonizer.encryptPasswordByHash(password, user.hash);
            
            return hashedPassword === user.password;
        } catch (err) {}
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
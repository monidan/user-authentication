const UserController = require('../controllers/user.controller');

function signUpRoute(fastify, options, done) {
    const controller = new UserController();

    fastify.route({
        method: 'POST',
        url: '/sign-up',
        async handler(request, reply) {
            await controller.signUp(request, reply);
        },
    });
    done();
}

module.exports = signUpRoute;
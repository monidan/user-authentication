const UserController = require('../controllers/user.controller');

function logInRoute(fastify, options, done) {
    const controller = new UserController();

    fastify.route({
        method: 'GET',
        url: '/log-in',
        async handler(request, reply) {
            await controller.logIn(request, reply);
        }
    });

    done();
}

module.exports = logInRoute;
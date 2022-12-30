const UserController = require('../controllers/user.controller');

function logInRoute(fastify, options, done) {
    const controller = new UserController();

    fastify.route({
        method: 'POST',
        url: '/log-in',
        async handler(request, reply) {
            await controller.logIn(request, reply);
        }
    })
}

module.exports = logInRoute;
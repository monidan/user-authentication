const _fastify = require('fastify');
const cors = require('@fastify/cors');

const routes = require('./routes');
const firebase = require('./firebase');

/**
 * @type {import('fastify').FastifyInstance}
 */
const fastify = _fastify({
    logger: true,   
})

fastify.register(cors, {});

routes.forEach(route => fastify.register(route));

fastify.listen({ port: 3000 }, function(err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1)
    }
})
const _fastify = require('fastify');

const routes = require('./routes');
const firebase = require('./firebase');

const fastify = _fastify({
    logger: true,   
})

fastify.register(...routes);

fastify.listen({ port: 3000 }, function(err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1)
    }
})
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        path: '/notes',
        method: 'POST',
        handler: (request, h) => {
            return 'Hello World'
        }
    });

    await server.start();

    console.log(`${server.info.uri}`);
};

init();
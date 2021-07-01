const routes = [
    {
        path: '/notes',
        method: 'POST',
        handler: (request, h) => {
            return 'Hello World'
        }
    }
];

module.exports = routes;
const { addNoteHandler, getNoteHandler, getNoteByIdHandler } = require('./handler');

const routes = [
    {
        path: '/notes',
        method: 'POST',
        handler: addNoteHandler,
    },
    {
        path: '/notes',
        method: 'GET',
        handler: getNoteHandler,
    },
    {
        path: '/notes/{id}',
        method: 'GET',
        handler: getNoteByIdHandler
    }
];

module.exports = routes;
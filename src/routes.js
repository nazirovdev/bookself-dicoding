const { addNoteHandler, getNoteHandler, getNoteByIdHandler, editNoteByIdHandler } = require('./handler');

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
    },
    {
        path: '/notes/{id}',
        method: 'PUT',
        handler: editNoteByIdHandler
    }
];

module.exports = routes;
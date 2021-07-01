const { addNoteHandler, getNoteHandler } = require('./handler');

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
    }
];

module.exports = routes;
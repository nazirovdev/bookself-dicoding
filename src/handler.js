const notes = require('./notes');
const {nanoid} = require('nanoid');

const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        id, title, tags, body, createdAt, updatedAt
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id);

    if (isSuccess) {
        return h.response({
            status: 'success',
            message: 'Catatan berhasil disimpan'
        }).code(201);
    }
    return h.response({
        status: 'fail',
        message: 'Catatan gagal disimpan'
    }).code(400);
};

const getNoteHandler = (request, h) => {
    return h.response({
        data: {
            notes
        }
    }).code(200);
};

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.find((note) => note.id === id);

    if (!note) {
        return h.response({
            status: 'fail',
            message: 'Data tidak ditemukan'
        }).code(404);
    }
    return h.response({
        data: {
            note
        }
    }).code(200);
};

const editNoteByIdHandler = (request, h) => {
    const {id} = request.params;
    const index = notes.findIndex((note) => note.id === id);

    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString();

    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Data tidak ditemukan'
        }).code(404);
    }else {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        };
        return h.response({
            status: 'success',
            message: 'Data Berhasil diedit'
        }).code(200);
    }
};

const deleteNoteByIdHandler = (request, h) => {
    const {id} = request.params;
    const index = notes.findIndex((note) => note.id === id);

    if (index === -1) {
        return h.response({
            status: 'fail',
            message: 'Data tidak ditemukan'
        }).code(404);
    }else {
        notes.splice(index, 1);
        return h.response({
            status: 'success',
            message: 'Data Berhasil dihapus'
        }).code(201);
    }
};

module.exports = { addNoteHandler, getNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler };
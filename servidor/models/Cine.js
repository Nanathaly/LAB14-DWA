const mongoose = require('mongoose');

const CineSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    calle: {
        type: String,
        require: true
    },
    numero: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    }
    
});

module.exports = mongoose.model('Cine', CineSchema)
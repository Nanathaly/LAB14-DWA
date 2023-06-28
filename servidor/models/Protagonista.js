const mongoose = require('mongoose');

const ProtagonistaSchema = mongoose.Schema({
    codigo: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Protagonista', ProtagonistaSchema)
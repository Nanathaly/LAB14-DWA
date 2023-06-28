const { Schema, model } = require("mongoose");

const PeliculaSchema = new Schema({

    codigo: {
        type: String,
        require: true
    },
    titulo: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require:true
    },
    clasificacion:{
        type: String,
        require:true
    },
    protagonista:{ 
        type: Schema.Types.ObjectId, 
        ref: "Protagonista", 
        required: true 
    },
});

const PeliculaModel = model("Pelicula", PeliculaSchema);
module.exports = PeliculaModel;

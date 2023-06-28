const { Schema, model } = require("mongoose");

const ProyeccionSchema = new Schema({
  codigo: {
    type: String,
    require: true,
  },
  horarioPase: {
    type: String,
    require: true,
  },
  pelicula: {
    type: Schema.Types.ObjectId,
    ref: "Pelicula",
    required: true,
  },
  genero: {
    type: Schema.Types.ObjectId,
    ref: "Pelicula",
    required:true,
  },
  clasificacion: {
    type: Schema.Types.ObjectId,
    ref: "Pelicula",
    required:true,
  },
  cine: {
    type: Schema.Types.ObjectId,
    ref: "Cine",
    required: true,
  },
  direccion:{
    type:Schema.Types.ObjectId,
    ref:"Cine",
    required:true,
  },
  precio: {
    type: Schema.Types.ObjectId,
    ref: "Precio",
    required: true,
  },
});
const ProyeccionModel = model("Proyeccion", ProyeccionSchema);
module.exports = ProyeccionModel;
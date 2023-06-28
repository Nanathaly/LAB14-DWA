const mongoose = require("mongoose");

const CineSchema = mongoose.Schema({
  codigo: {
    type: String,
    require: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  direccion: {
    type: String,
    require: true,
  },
  telefono: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Cine", CineSchema);
const mongoose = require("mongoose");

const PrecioSchema = mongoose.Schema({
  codigo: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  valor: {
    type: Number,
    require: true,
  }
});

module.exports = mongoose.model("Precio", PrecioSchema);
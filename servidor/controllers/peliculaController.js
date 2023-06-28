const PeliculaModel = require("../models/Pelicula");

exports.crearPelicula = async (req, res) => {
  try {
    const pelicula = req.body;
    await PeliculaModel.create(pelicula);
    res.send(pelicula);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerPelicula = async (req, res) => {
  try {
    const peliculas = await PeliculaModel.find().populate("protagonista");
    res.json(peliculas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarPelicula = async (req, res) => {
  try {
    const { _id, codigo, titulo, director, genero, clasificacion, protagonista} =
      new PeliculaModel(req.body);
    let peliculas = await VueloModel.findById(req.params.id);

    if (!peliculas) {
      res.status(404).json({ msg: "No existe la pelicula" });
    }

    codigo._id = _id;
    peliculas.codigo = codigo;
    peliculas.titulo = titulo;
    peliculas.director = director;
    peliculas.genero = genero;
    peliculas.clasificacion = clasificacion;
    peliculas.protagonista.nombre = protagonista;

    console.log(peliculas);

    peliculas = await PeliculaModel.findOneAndUpdate({ _id: req.params.id }, peliculas, {
      new: true,
    });
    res.json(peliculas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.verPelicula = async (req, res) => {
  try {
    let peliculas = await PeliculaModel.findById(req.params.id);

    if (!peliculas) {
      res.status(404).json({ msg: "No existe la pelicula" });
    }

    res.json(peliculas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarPelicula = async (req, res) => {
  try {
    let peliculas = await PeliculaModel.findById(req.params.id);

    if (!peliculas) {
      res.status(404).json({ msg: "No existe la pelicula" });
    }

    await PeliculaModel.deleteOne({ _id: req.params.id });

    res.json({ msg: "La pelicula: " + peliculas.titulo + " se ha eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

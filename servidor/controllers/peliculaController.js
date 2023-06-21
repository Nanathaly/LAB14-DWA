const Pelicula = require("../models/Pelicula");

exports.crearPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);

        await pelicula.save();
        res.send(pelicula);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPelicula = async (req, res) => {

    try {

        const peliculas = await Pelicula.find();
        res.json(peliculas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPelicula = async (req, res) => {

    try {

        const {_id, titulo, director, clasificacion, protagonista, genero } = new Pelicula(req.body);
        let pelis = await Cine.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe el cine'});
        }

        titulo._id = _id;
        pelis.titulo = titulo;
        pelis.director = director;
        pelis.clasificacion = clasificacion;
        pelis.protagonista = protagonista;
        pelis.genero = genero;


        console.log(pelis)

        pelis = await Pelicula.findOneAndUpdate({ _id: req.params.id }, pelis, { new: true } );
        res.json(pelis);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPelicula = async (req, res) => {

    try {

        let pelis = await Pelicula.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        res.json(pelis);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPelicula = async (req, res) => {

    try {

        let pelis = await Pelicula.findById(req.params.id);

        if(!pelis){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        await Pelicula.deleteOne({ _id: req.params.id });

        res.json({ msg: 'La pelicula: ' + pelis.titulo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


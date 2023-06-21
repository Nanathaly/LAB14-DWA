const Cine = require("../models/Cine");

exports.crearCine = async (req, res) => {
    try {
        const cine = new Cine(req.body);

        await cine.save();
        res.send(cine);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCine = async (req, res) => {

    try {

        const cins = await Cine.find();
        res.json(cins);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarCine = async (req, res) => {

    try {

        const {_id, nombre, calle, numero, telefono } = new Cine(req.body);
        let cines = await Cine.findById(req.params.id);

        if(!cines){
            res.status(404).json({ msg: 'No existe el cine'});
        }

        nombre._id = _id;
        cines.nombre = nombre;
        cines.calle = calle;
        cines.numero = numero;
        cines.telefono = telefono;

        console.log(cines)

        cines = await Cine.findOneAndUpdate({ _id: req.params.id }, cines, { new: true } );
        res.json(cines);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verCine = async (req, res) => {

    try {

        let cines = await Cine.findById(req.params.id);

        if(!cines){
            res.status(404).json({ msg: 'No existe el cine'});
        }

        res.json(cines);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarCine = async (req, res) => {

    try {

        let cines = await Cine.findById(req.params.id);

        if(!cines){
            res.status(404).json({ msg: 'No existe el cine'});
        }

        await Cine.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El cine: ' + cines.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


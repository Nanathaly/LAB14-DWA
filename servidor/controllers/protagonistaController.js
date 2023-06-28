const Protagonista = require("../models/Protagonista");

exports.crearProtagonista = async (req, res) => {
    try {
        const protagonista = new Protagonista(req.body);

        await protagonista.save();
        res.send(protagonista);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProtagonista = async (req, res) => {

    try {

        const protagonistas = await Protagonista.find();
        res.json(protagonistas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProtagonista = async (req, res) => {

    try {

        const {_id, codigo, nombre, fechaNacimiento } = new Protagonista(req.body);
        let protagonistas = await Protagonista.findById(req.params.id);

        if(!protagonistas){
            res.status(404).json({ msg: 'No existe el protagonista'});
        }

        codigo._id = _id;
        protagonistas.codigo = codigo;
        protagonistas.nombre = nombre;
        protagonistas.fechaNacimiento = fechaNacimiento;

        console.log(protagonistas)

        protagonistas = await Protagonista.findOneAndUpdate({ _id: req.params.id }, protagonistas, { new: true } );
        res.json(protagonistas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verProtagonista = async (req, res) => {

    try {

        let protagonistas = await Protagonista.findById(req.params.id);

        if(!protagonistas){
            res.status(404).json({ msg: 'No existe el protagonista'});
        }

        res.json(protagonistas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarProtagonista = async (req, res) => {

    try {

        let protagonistas = await Protagonista.findById(req.params.id);

        if(!protagonistas){
            res.status(404).json({ msg: 'No existe el protagonista'});
        }

        await Protagonista.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El protagonista: ' + protagonistas.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


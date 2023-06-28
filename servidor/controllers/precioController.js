const Precio = require("../models/Precio");

exports.crearPrecio= async (req, res) => {
    try {
        const precio = new Precio(req.body);

        await precio.save();
        res.send(precio);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPrecio = async (req, res) => {

    try {

        const precios = await Tienda.find();
        res.json(precios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPrecio = async (req, res) => {

    try {

        const {_id, codigo, tipo, valor} = new Precio(req.body);
        let precios = await Precio.findById(req.params.id);

        if(!precios){
            res.status(404).json({ msg: 'No existe el precio'});
        }

        codigo._id = _id;
        precios.codigo = codigo;
        precios.tipo = tipo;
        precios.valor = valor;

        console.log(precios)

        precios = await Precio.findOneAndUpdate({ _id: req.params.id }, precios, { new: true } );
        res.json(precios);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verPrecio = async (req, res) => {

    try {

        let precios = await Precio.findById(req.params.id);

        if(!precios){
            res.status(404).json({ msg: 'No existe el precio'});
        }

        res.json(precios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPrecio = async (req, res) => {

    try {

        let precios = await Precio.findById(req.params.id);

        if(!precios){
            res.status(404).json({ msg: 'No existe el precios'});
        }

        await Precio.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El precio de ' + precios.tipo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


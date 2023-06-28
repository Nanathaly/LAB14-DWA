const ProyeccionModel = require("../models/Proyeccion");
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

exports.crearProyeccion = async (req, res) => {
  try {
    const proyeccion = req.body;
    await ProyeccionModel.create(proyeccion);
    res.send(proyeccion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerProyeccion = async (req, res) => {
  try {
    const proyeccions = await ProyeccionModel.find().populate("pelicula").populate("cine").populate("precio");
    res.json(proyeccions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarProyeccion = async (req, res) => {
  try {
    const { _id, codigo, horarioPase, pelicula, genero, clasificacion,cine, direccion, precio } =
      new ProyeccionModel(req.body);
    let proyeccions = await ProyeccionModel.findById(req.params.id);

    if (!proyeccions) {
      res.status(404).json({ msg: "No existe la proyeccion" });
    }

    codigo._id = _id;
    proyeccions.codigo = codigo;
    proyeccions.horarioPase = horarioPase;
    proyeccions.pelicula = pelicula;
    proyeccions.genero = genero;
    proyeccions.clasificacion = clasificacion;
    proyeccions.cine = cine;
    proyeccions.direccion = direccion;
    proyeccions.precio = precio;

    console.log(proyeccions);

    proyeccions = await ProyeccionModel.findOneAndUpdate({ _id: req.params.id }, proyeccions, {
      new: true,
    });
    res.json(proyeccions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.verProyeccion = async (req, res) => {
  try {
    let proyeccions = await ProyeccionModel.findById(req.params.id);

    if (!proyeccions) {
      res.status(404).json({ msg: "No existe la proyeccion" });
    }

    res.json(proyeccions);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarProyeccion = async (req, res) => {
  try {
    let proyeccions = await ProyeccionModel.findById(req.params.id);

    if (!proyeccions) {
      res.status(404).json({ msg: "No existe la proyeccion" });
    }

    await ProyeccionModel.deleteOne({ _id: req.params.id });

    res.json({ msg: "La proyeccion: " + proyeccions.codigo + " se ha eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.generarPDF = async (req, res) => {
  try {
    const proyeccions = await ProyeccionModel.find()
      .populate('pelicula', 'titulo')
      .populate('pelicula','genero')
      .populate('pelicula','clasificacion')
      .populate('cine','nombre')
      .populate('cine','direccion')
      .populate('precio', 'valor');
    
    const fechaGeneracion = new Date();

    const documentDefinition = {
      content: [
        { text: "Reporte de Proyeccion", style: "header" },
        { text: "\n" },
        { text: `Fecha de generación: ${fechaGeneracion.toLocaleString()}` },
        { text: "\n" },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "auto", "*", "*", "auto", "*", 'auto','auto'],
            body: [
              [
                { text: "Codigo", bold: true, style: "tableCell" },
                { text: "Horario", bold: true, style: "tableCell" },
                { text: "Pelicula", bold: true, style: "tableCell" },
                { text: "Genero", bold: true, style: "tableCell" },
                { text: "Clasificacion", bold: true, style: "tableCell" },
                { text: "Cine", bold: true, style: "tableCell" },
                { text: "Direccion", bold: true, style: "tableCell"},
                { text: "Precio", bold: true, style: "tableCell"},
              ],
            ], 
          },
          style: "subheader"},
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          color: "blue",
        },
        subheader: {
          fillColor: "#E3FCFF", 
        },
        tableCell: {
          fillColor: "#70B8F8", 
        },
      },
    };
    for (let i = 0; i < proyeccions.length; i++) {
      const proyeccion = proyeccions[i];
      documentDefinition.content[4].table.body.push([
        proyeccion.codigo,
        proyeccion.horarioPase,
        proyeccion.pelicula.nombre,
        proyeccion.pelicula.titulo,
        proyeccion.pelicula.clasificacion,
        proyeccion.cine.nombre,
        proyeccions.cine.direccion,
        proyeccions.precio.valor
      ]);
    }

    const pdfDoc = pdfMake.createPdf(documentDefinition);

    pdfDoc.getBuffer((buffer) => {
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=lista_proyecciones.pdf",
        "Content-Length": buffer.length,
      });

      res.end(buffer);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al generar el PDF");
  }
};

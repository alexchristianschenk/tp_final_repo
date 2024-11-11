const mongoose = require('mongoose');
const Turno = require('../models/TurnoModel');

// Obtener todos los hechizos
exports.getTurnos = async (req, res) => {
  try {
    const turnos = await Turno.find();
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un hechizo por ID
// exports.getHechizoById = async (req, res) => {
//   try {
//     const hechizo = await Hechizo.findById(req.params.id);
//     if (hechizo) {
//       res.json(hechizo);
//     } else {
//       res.status(404).json({ message: 'Hechizo no encontrado' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// Crear un nuevo hechizo
exports.createTurno = async (req, res) => {
  const turno = new Turno({
    nombre: req.body.nombre,
    fecha: req.body.fecha,
    Horario: req.body.Horario,
  });
  
  try {
    const nuevoTurno = await turno.save();
    res.status(201).json(nuevoTurno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un hechizo por ID
// exports.updateHechizo = async (req, res) => {
//   try {
//     const hechizo = await Hechizo.findById(req.params.id);
//     if (hechizo) {
//       hechizo.nombre = req.body.nombre || hechizo.nombre;
//       hechizo.descripcion = req.body.descripcion || hechizo.descripcion;
//       hechizo.nivel = req.body.nivel || hechizo.nivel;
      
//       const hechizoActualizado = await hechizo.save();
//       res.json(hechizoActualizado);
//     } else {
//       res.status(404).json({ message: 'Hechizo no encontrado' });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// Eliminar un hechizo por ID
exports.deleteTurno = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const turno = await Turno.findById(req.params.id);
    if (turno) {
      await turno.deleteOne();
      res.json({ message: 'Turno eliminado' });
    } else {
      res.status(404).json({ message: 'Turno no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
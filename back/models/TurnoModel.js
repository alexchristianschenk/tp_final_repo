const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  horario: { type: Number, required: true },
});

module.exports = mongoose.model('Turno', turnoSchema);

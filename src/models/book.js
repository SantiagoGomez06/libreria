const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['disponible', 'reservado'],
    default: 'disponible'
  }
});

module.exports = mongoose.model('Book', BookSchema);
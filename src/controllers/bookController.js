const Book = require('../models/Book');
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middleware/auth');

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear libro', error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener libros', error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener libro', error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar libro', error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar libro', error: error.message });
  }
};
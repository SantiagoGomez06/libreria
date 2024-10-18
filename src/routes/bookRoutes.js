const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - publicationYear
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               publicationYear:
 *                 type: integer
 *               status:
 *                 type: string
 *                 enum: [disponible, reservado]
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 */
router.post('/', auth, bookController.createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtener todos los libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get
module.exports = router;
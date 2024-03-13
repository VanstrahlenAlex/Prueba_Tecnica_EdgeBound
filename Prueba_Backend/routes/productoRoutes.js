import express from 'express';
import {getProductos, crearProducto} from '../controllers/productoController.js';

const router = express.Router();

//Creacion de productos

router.get('/', getProductos);
router.post('/', crearProducto); //Creacion de product

router.post('/', (req, res) => {
	res.send('Crear Producto!');
})

export default router;
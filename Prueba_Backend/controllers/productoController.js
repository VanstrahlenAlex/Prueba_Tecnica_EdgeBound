	import Producto from "../models/Producto.js";

	const getProductos = async (req, res) => {
			try {
			const { filter } = req.query;
			const productosEncontrados = await Producto.find({ name: { $regex: filter, $options: 'i' } });
			const category = productosEncontrados.length > 0 ? productosEncontrados[0].category : null;
			const productosSugeridos = await Producto.find({ category: category }).limit(2);

			res.json({ productosEncontrados, productosSugeridos });
		} catch (error) {
			console.log(error.message);
			res.status(500).json({ error: 'Ocurrió un error al obtener los productos.' });
		}
	}


	const crearProducto = async (req, res) => {
		console.log("creando Producto");
		//console.log(req.body);

		try {
			const producto = new Producto(req.body)
			const productoAlmacenado = await producto.save()
			res.json(productoAlmacenado)
		} catch (error) {
			console.log(error.message);
		}

		
	}

	export {
		getProductos,
		crearProducto
	}
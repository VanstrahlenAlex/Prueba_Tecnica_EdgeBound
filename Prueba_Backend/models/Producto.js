import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
	name: {
		type: 'string',
		required: true,
		trim: true,
	},
	category: {
		type:'string',
        required: true,
        trim: true,
	}
}, {
	timestamps: true
}
);

const Producto = mongoose.model('Producto', productoSchema);
export default Producto;
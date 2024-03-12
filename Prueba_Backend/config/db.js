import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const conectarDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
            useUnifiedTopology: true
		});
		const url = `${connection.connection.host}:${connection.connection.host}`;
		console.log(`MongoDB Conectado en : ${url}`);
	} catch (error) {
		console.log(`Failed to connect with the next error:  ${error.message}`);
		process.exit(1);
	}

}

export default conectarDB;
import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

//MongoDB
import conectarDB from './config/db.js';

//Inicio de App
const app = express();


//MongoDB
conectarDB();

dotenv.config();

console.log(process.env.PORT);

// Cargar datos del archivo products.json
const productsData = fs.readFileSync('./db/products.json');
const products = JSON.parse(productsData).products;

app.get('/search', (req, res) => {
    const filter = req.query.filter;
    let foundProducts = [];

    if (filter) {
        foundProducts = products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));
    }

    let suggestedProducts = [];
    if (foundProducts.length > 0) {
        const category = foundProducts[0].category;
        suggestedProducts = products.filter(product => product.category === category && !foundProducts.includes(product)).slice(0, 2);
    }

    res.json({ foundProducts, suggestedProducts });
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

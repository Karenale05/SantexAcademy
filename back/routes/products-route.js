const express = require('express');
const productsController = require('../controllers/products-controller');

const router = express.Router();

router.get('/products', productsController.products);

// obtener por id
router.get('/obtener-producto-por-id/:id', productsController.getProductFromId);

// categorias
router.get('/categories', productsController.getCategories);

// cargar producto
router.post('/cargar-producto', productsController.chargeProduct);

// modificar articulo
router.put('/modificar-articulo/:id', productsController.editProduct);

// importar imagenes
router.post('/upload', (req, res) => {
    console.log(req.headers['content-type']);

    const boundary = req.headers['content-type'].split('boundary=')[1];

    let body = '';
    req.on('data', (chunk) => (body += chunk));

    req.on('end', () => {
        body.split(boundary).map((data, index) => console.log(index, data));

        res.sendStatus(200);
    });
});

module.exports = router;

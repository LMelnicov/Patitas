var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var cloudinary = require('cloudinary').v2;

router.get('/productos', async function (req, res, next) {
    try {
        let productos = await productosModel.getProductos();
        const base = `${req.protocol}://${req.get('host')}`;

        productos = productos.map(producto => ({
            ...producto,
            imagen: producto.img_id
                ? cloudinary.url(producto.img_id, { width: 400, height: 300, crop: 'fill' })
                : `${base}/images/noimagen.jpg`
        }));

        res.json(productos);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
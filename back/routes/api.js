var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'melnicovlucas@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;
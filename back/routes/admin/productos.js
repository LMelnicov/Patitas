var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');

var util = require('util');
var cloudinary = require('cloudinary');


// para listar los productos
router.get('/', async function (req, res, next) {

    var productos = await productosModel.getProductos();

    productos = productos.map(producto => {
        if (producto.img_id) {
            const imagen = cloudinary.image(producto.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...producto,
                imagen
            }
        } else {
            return {
                ...producto,
                imagen: '<img src="/images/noimagen.jpg" width="100" style="object-fit: cover;">'
            }
        }
    });

    res.render('admin/productos', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        productos
    });
});

/* agregar productos */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await cloudinary.uploader.upload(imagen.tempFilePath)).public_id;
        }


        if (req.body.categoria != "" && req.body.titulo != "" && req.body.descripcion != "") {

            await productosModel.insertProducto({
                ...req.body,
                img_id
            });

            res.redirect('/admin/productos')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/agregar',
            error: true,
            message: 'No se cargo el producto'
        })
    }
})

/* eliminar */
router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;

    let producto = await productosModel.getProductoById(id);
    if (producto.img_id) {
        await cloudinary.uploader.destroy(producto.img_id);
    }

    await productosModel.deleteProductosById(id);

    res.redirect('/admin/productos');

})

/* traer producto por ID para luego modificarlo */
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    //console.log(req.params.id);
    var producto = await productosModel.getProductoById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        producto,
        Alimentacion: producto.categoria === 'al',
        Confort: producto.categoria === 'con',
        Accesorios: producto.categoria === 'acc'
    })
})

/* modificar */
router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                const imagen = req.files.imagen;
                img_id = (await cloudinary.uploader.upload(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await cloudinary.uploader.destroy(req.body.img_original);
        }


        var obj = {
            categoria: req.body.categoria,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            img_id
        }

        console.log(req.body)
        console.log(obj)
        console.log(req.body.id)

        await productosModel.modificarProductoById(obj, req.body.id);
        res.redirect('/admin/productos');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el producto'
        })
    }
})


module.exports = router;
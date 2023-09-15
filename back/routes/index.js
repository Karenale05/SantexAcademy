const Express = require('express');
const { dirname, extname, join } = require('path');


// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const userRoutes = require('./user');
const direccionRoutes = require('./direccion');
const productsRoutes = require('./products-route');
const alquileresVendedorRoutes = require('./alquileres-vendedor-route');
const alquilerRoutes = require('./alquiler');




const app = Express();

// Rutas
app.use('/users', userRoutes);
app.use('/productos', productsRoutes);
app.use('/direccion', direccionRoutes);
app.use('/alquileres-vendedor', alquileresVendedorRoutes);
app.use('/alquiler', alquilerRoutes);

app.post('/productos/upload', multerUpload.single('file'), (req, res) => {
  console.log(req.file);

  res.sendStatus(200);
});

// use=
app.use('/public', Express.static(join(CURRENT_DIR, '../uploads')));
app.use('/user', userRoutes);
app.use('/vendedor', alquileresVendedorRoutes);
app.use('/', productsRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;

const Express = require('express');
const multer = require('multer');
const { dirname, extname, join } = require('path');
const { fileURLToPath } = require('url');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const userRoutes = require('./user');
const direccionRoutes = require('./direccion');
const productsRoutes = require('./products-route');
const alquileresVendedorRoutes = require('./alquileres-vendedor-route');
const alquilerRoutes = require('./alquiler');

const MIMETYPES = ['image/jpeg', 'image/png'];
const multerUpload = multer({
  storage: multer.diskStorage({
      destination: join(CURRENT_DIR, '../uploads'),
      filename: (req, file, cb) => {
          const fileExtension = extname(file.originalname);
          const fileName = file.originalname.split(fileExtension)[0];

          cb(null, `${fileName}-${Date.now()}${fileExtension}`);
      },
  }),
  fileFilter: (req, file, cb) => {
      if (MIMETYPES.includes(file.mimetype)) cb(null, true);
      else cb(new Error(`Solo se permiten archivos ${MIMETYPES.join(' ')}`));
  },
  limits: {
      fieldSize: 10000000,
  },
});

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

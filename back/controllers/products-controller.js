const productsService = require('../services/products-service');
const multer = require('multer');
const { fileURLToPath } = require('url');
const { dirname, extname, join } = require('path');

async function products(req, res, next) {
  console.log('funcionProductos');
  const { name, password } = req.body;

  try {
    const result = await productsService.products(name, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

// obtener por id
async function getProductFromId(req, res) {
  const { id } = req.params;

  try {
    const articulo = await productsService.getProductoById(id);

    res.status(200).send(articulo);
  } catch (error) {
    res.status(404).send('Producto no encontrado');
  }
}

// categorias
async function getCategories(req, res) {
  const categories = await productsService.getAllCategories();

  res.status(200).send(categories);
}

// cargar producto

async function chargeProduct(req, res) {
  const {
    idUsuario, idTipoProducto, nombre, detalles, precio, envio,
  } = req.body;

  const product = await productsService.chargeProducts(idUsuario, idTipoProducto, nombre,
    detalles, precio, envio);

  const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
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

  res.status(201).send(product);
}

// modificar articulo

async function editProduct(req, res) {
  const { id } = req.params;
  const {
    idUsuario, idTipoProducto, nombre, detalles, precio, envio,
  } = req.body;

  const article = await productsService.editArticle(id, idUsuario, idTipoProducto, nombre,
    detalles, precio, envio);

  res.status(201).send(article);
}

module.exports = {
  products, getCategories, chargeProduct, getProductFromId, editProduct,
};

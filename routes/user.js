const {Router} = require('express');// se está desarmando la funcion 'Router' que viene en el paquete express para poder acceder a sus propiedades

const {usuariosGet, usuariosPost, usuariosPatch, usuariosDelete, usuariosPut} = require('../controllers/usuarios');

const router = Router();//llamo a la funcion Router


  router.get('/', usuariosGet);
  router.post('/', usuariosPost);
  router.patch('/', usuariosPatch);
  router.delete('/', usuariosDelete);
  router.put('/:id', usuariosPut);



module.exports = router;
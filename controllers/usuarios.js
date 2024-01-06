const {response} = require('express');

const usuariosGet = (req, res = response) => {

    const {query, nombre = 'no name', page=1, limit} = req.query;//query params


    res.json(
        {
            msg: 'get API - controlador',
            query,
            nombre,
            page,
            limit
        }
    )
  }

  const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;//desestructuro del body y obtengo los datos que quiero

    res.json(
        {
            msg: 'post API - controlador',
            nombre, edad
        }
    )
  }

  const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json(
        {
            msg: 'put API - controlador',
            id
        }
    )
  }

  const usuariosPatch = (req, res = response) => {

    res.json(
        {
            msg: 'patch API - controlador'
        }
    )
  }

  const usuariosDelete = (req, res = response) => {

    res.json(
        {
            msg: 'delete API - controlador'
        }
    )
  }

  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }
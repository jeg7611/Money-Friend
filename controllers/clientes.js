const clientes = require('../models').clientes;

module.exports = {

  list(req, res) {
    return clientes
      .findAll({
        attributes: ['cedula', 'nombre', 'apellido', 'direccion', 'telefono', 'celular', 'sucursal'],
      })
      .then((clientes) => res.status(200).send(clientes))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return clientes
      .findById(req.params.id, {
        attributes: ['cedula', 'nombre', 'apellido', 'direccion', 'telefono', 'celular', 'sucursal'],
      })
      .then((clientes) => {
        if (!clientes) {
          return res.status(404).send({
            message: 'Clients Not Found',
          });
        }
        return res.status(200).send(clientes);
      })
      .catch((error) => res.status(400).send(error));
  },
};

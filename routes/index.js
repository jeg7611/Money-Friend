
var express = require('express');
var app = express();
var router = express.Router();
var db = require('../queries');
const clientesController = require('../controllers').clientes;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Classroom Router */
router.get('/api/clientes', clientesController.list);
router.get('/api/clientes/:id', clientesController.getById);


router.get('/api/clients', db.getAllClients);
router.get('/api/clients/:id', db.getSingleClient);
router.post('/api/clients', db.createClient);
router.put('/api/clients/:id', db.updateClient);
router.delete('/api/clients/:id', db.removeClient);


module.exports = router;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});



var express = require('express'),
app     = express();

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

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
    app.listen(port, ip);
    console.log('Server running on http://%s:%s', ip, port);



var express = require('express'),
    app = express();

var cors = require('cors');

app.use(cors());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var router = express.Router();
var db = require('../queries');
const clientesController = require('../controllers').clientes;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* clientes Router */
router.get('/api/clientes', clientesController.list);
router.get('/api/clientes/:id', clientesController.getById);


router.get('/api/clients', db.getAllClients);
router.get('/api/clients/:id', db.getSingleClient);
router.post('/api/clients', db.createClient);
router.put('/api/clients/:id', db.updateClient);
router.delete('/api/clients/:id', db.removeClient);

module.exports = router;


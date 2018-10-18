
var express = require('express'),
    app = express();

var cors = require('cors');

app.use(cors());

app.use((req,res,next) => {

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    next();

});

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


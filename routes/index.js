var express = require('express');
var router = express.Router();
var db = require('../queries');


router.get('/api/clients', db.getAllClients);
router.get('/api/clients/:id', db.getSingleClient);
router.post('/api/clients', db.createClient);
router.put('/api/clients/:id', db.updateClient);
router.delete('/api/clients/:id', db.removeClient);

// application -------------------------------------------------------------
router.get('/', function (req, res) {

    res.render('index', {title: 'Rest MoneyFriend'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;

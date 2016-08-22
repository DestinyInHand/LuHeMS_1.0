/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('base_log');
});

module.exports = router;

/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();

/* 温室基本信息. */
router.get('/', function(req, res) {
    res.render('base_info');
});

module.exports = router;

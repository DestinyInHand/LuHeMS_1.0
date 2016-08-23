/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');

//登录
router.get('/',function(req,res){
    res.render('login');
});

//登录验证
router.post('/',function(req,res,next) {
    var username = req.body.username;
    var passwd = req.body.password;
    res.send('-------');
});

module.exports = router;
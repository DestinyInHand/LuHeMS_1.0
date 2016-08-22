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
    var passwd = req.body.passwd;
    User.Validation(username,passwd,function (err,user) {
        if(err){
            return next(err);
        }
        if(user){
            req.session.username = username;
            res.render('index',{user:username});
        }else{
            res.render('login',{status:'用户登录信息不正确！'});
        }
    });
});

module.exports = router;
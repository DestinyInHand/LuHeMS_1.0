/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();

/* 用户列表. */
router.get('/', function(req, res) {
  res.render('users');
});

//用户管理

module.exports = router;

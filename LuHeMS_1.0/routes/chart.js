/**
 * Created by RickD on 2016/8/7.
 */
/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();

//图表
router.get('/',function(req,res){
    res.render('chart');
});


module.exports = router;
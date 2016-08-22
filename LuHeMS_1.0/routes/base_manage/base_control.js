/**
 * Created by RickD on 2016/8/7.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('base_control');
});

router.post('/',function(req,res){
    console.log(req.body);
    console.log(req.body['deviceID']);
    res.send('123');
});
module.exports = router;

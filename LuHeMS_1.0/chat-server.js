/**
 * Created by RickD on 2016/8/17.
 */
var io = require('socket.io')();

io.on('connection',function(_socket){
    console.log(_socket.id + ': connection');
    _socket.on('disconnect',function(){
        console.log(_socket.id + ': disconnect');
    });

    _socket.on('say',function(_content){
        var msg = JSON.stringify(_content);
        console.log(_socket.id + ': say(' + msg +')');
        _socket.send('操作成功');
    });

});


exports.listen = function(_server){
    return io.listen(_server);
};
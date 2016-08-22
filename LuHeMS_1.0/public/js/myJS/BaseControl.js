/**
 * Created by RickD on 2016/8/9.
 */
var url = 'http://' + location.hostname + ':3000';
var socket = io.connect(url);
$('.btn-open').click(function(){
    var deviceID = $('#deviceID').val();
    var opt = 1;
    var sendMsg = {
        deviceID : deviceID,
        option : opt
    };
    socket.emit('say',sendMsg);
});
socket.on('message',function(msg){
    alert(msg);
});


// 温室控制界面
/* 修改控制图片的css属性*/
$('.device_img').css({'width':'100px','height':'100px'});
// 两种运转状态的设备
$('.device_2').click(function(){
    var base_name = $('#base_name').text();
    $('#deleted_username_2').text(base_name);
    $('#deleted_username_2').css({'color':'red','font-weight':'bold','font-style':'oblique','font-size':'larger'});
    $(this).attr('href','base_control.html#myModal_2');
    $('#deviceID').val(
        $(this).attr('id')
    );
});
// 三种运转状态的设备
$('.device_3').click(function(){
    //var device_name = $(this).parent().
    //如何获取到相应的设备名称，待定
    var base_name = $('#base_name').text();
    $('#deleted_username_3').text(base_name);
    $('#deleted_username_3').css({'color':'red','font-weight':'bold','font-style':'oblique','font-size':'larger'});
    $(this).attr('href','base_control.html#myModal_3');
    $('#deviceID').val(
        $(this).attr('id')
    );
});



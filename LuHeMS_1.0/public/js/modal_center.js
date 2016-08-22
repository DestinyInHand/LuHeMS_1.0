/**
 * Created by RickD on 2016/8/9.
 */
//让modal居中显示
$('.modal_center').on('show.bs.modal',function(){
    $(this).css({
        'display':'block',
        'margin-top':function(){
            return $(this).height() / 3;
        }
    });
});
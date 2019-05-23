//= require jquery3
//= require jquery_ujs
//= require activestorage

//= require_tree .


$(main);

function main(){
    $('main').delay(200).slideDown(400);
    $('.dif').click(function(){
        $('.modals, h2').fadeOut(400,function(){
            $('.game').css('display','grid');
        });
    })
}
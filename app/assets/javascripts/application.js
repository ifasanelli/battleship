//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(main);

function main(){
    $('main').delay(200).fadeIn(400);
    $('.dif').click(function(){
        $('.modals, h2').fadeOut(400,function(){
            $('.game').css('display','grid');
        });
    })
}
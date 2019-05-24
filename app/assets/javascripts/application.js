//= require jquery3
//= require jquery_ujs
//= require activestorage

//= require_tree .


$(main);

function main(){
    $('main').delay(200).slideDown(400);
    
    $('.dif').hover(function(){
       var id = $(this).attr('id');
       $('.img-level').attr('src','assets/bomb-'+id+'.png');
    })
    //-----------------------------------------
    $('.dif').click(function(){
        $('.modals, h2').fadeOut(400,function(){
            $('.game').css('display','grid');
        });
    })
    //------------------------------------------
}
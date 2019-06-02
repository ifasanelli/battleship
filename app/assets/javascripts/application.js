//= require jquery3
//= require jquery_ujs
//= require activestorage

//= require_tree .


$(main);


function main(){
    $('.main-containers').delay(200).slideDown(400, function(){
        $(this).css('display','flex')
        var mainHeight = $('header').height()
        $(this).css('margin-top',mainHeight)
    });
    
    $('li').hover(function(){
       var id = $(this).attr('id');
       $('.img-level').attr('src','assets/bomb-'+id+'.png');
    })
    //-----------------------------------------
    $('.dif').click(function(){
        $('.modal-dif, h2').fadeOut(400,function(){
            $('.game').css('display','grid');
           
                $(document).scrollTop($(document).height());
        });
    })
    //------------------------------------------
    
   
}
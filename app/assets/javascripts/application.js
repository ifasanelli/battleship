//= require jquery3
//= require jquery_ujs
//= require activestorage

//= require_tree .


$(main);

function main(){
    $('main, nav').delay(200).slideDown(400, function(){
        $(this).css('display','flex')
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

//  function alert_set_ship(alerta){
//     $('.hint').html(alerta)
//     $('.modals-set-ship').slideDown(400)
//      $('.orientacao').click(function(){
//          $('.modals-set-ship').slideUp(400)
        
//      })
//  }
 
//  function set_ship(){
//      var or = '';
//       $('.orientacao').click(function(){
//       or = $(this).attr('id') 
//       })
//  }
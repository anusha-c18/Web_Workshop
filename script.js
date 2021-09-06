 $(window).on('load',function(){
     setTimeout(function(){
         try{
             loadScript();
         }
         catch(err){
             console.log(err);
         }
     },1000)

 })

 $(function(){
     var btn = $('.backToTop');
     $(window).scroll(function(){
         if($(window).scrollTop()<100){
             btn.addClass('hidden');
         }
         else{
             btn.removeClass('hidden');
         }
     })
 })

$(document).ready(function(){
    $('.open-button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('open');
    })
})


$(document).ready(function(){
    $('.nav-menu a').click(function(){
        $('.nav-menu').removeClass('open');
        $('.open-button').removeClass('open');
    })
})


//for smooth scroll
$(function(){
    $('a[href*=\\#]:not([href=\\#])').click(function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
    }
    })
})








 





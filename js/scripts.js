$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselbutton').click(function(){
        if ($('#carouselbutton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselbutton').children('span').removeClass('fa-pause');
            $('#carouselbutton').children('span').addClass('fa-play');
        }
        else if ($('#carouselbutton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselbutton').children('span').removeClass('fa-play');
            $('#carouselbutton').children('span').addClass('fa-pause');
        }
    });
    $('#loginbtn').click(function(){
        $('#loginmodal').modal('show');
    });
    $('#reservebtn').click(function(){
        $('#reserveModal').modal('show');
    });
});
$(document).ready(function() {
    function GetDisplayImageOn(imgSource) {
        $('#background_full').css("display","block");
        $('#background_full > img').attr({
            src: imgSource
        });
    }

    function displayImageOff() {
        $('#background_full').css("display","none");
    }
    $(".screenshots .screen > img").click(function(){
        GetDisplayImageOn($(this).attr("src"));
    });
    $("#background_full").click(displayImageOff); 
    console.log(123);
    $(".banners .banners-container").slick({
      dots: true,
      arrows: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
    });
    

    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
        $(".navbar .nav li a").each(function () {
            console.log($(this).attr('href'))
            var href = $(this).attr('href');
            console.log(path.substring(0, href.length))
            if (href.indexOf(path.substring(0, href.length - 1)) != -1 && path.length > 0 && href != "#") {
                $(this).closest('li').addClass('active');
            }
        });
    };
    setNavigation();
    
    $(window).on('DOMContentLoaded load resize scroll', handler); 

    function handler() {
        $(".news-page-header-container").each(function(e) {
            console.log($(this)[0].getBoundingClientRect().top);
            if ($(this)[0].getBoundingClientRect().top < -72) {
                $(".news-page-header").addClass("fix-header");
            } else {
                $(".news-page-header").removeClass("fix-header");
            }
        });
    }
});



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
    
    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
        $(".navbar .nav li a").each(function () {
            var href = $(this).attr('href');
            if (href.indexOf(path.substring(0, href.length - 1)) != -1 && path.length > 0 && href != "#") {
                $(this).closest('li').addClass('active');
            }
        });
    };
    setNavigation();
    
    $(window).on('DOMContentLoaded load resize scroll', handler); 

    function handler() {
        $(".news-page-header-container").each(function(e) {
            if ($(this)[0].getBoundingClientRect().top < -72) {
                $(".news-page-header").addClass("fix-header");
            } else {
                $(".news-page-header").removeClass("fix-header");
            }
        });
    }

    function slideRight() {
        var position_x = $('#slider').css("background-position-x");
        if (position_x == "0px" || position_x == "0%") {
            $('#slider').css("background-position-x",100 + "%");
        } else if (position_x == "100%") {
            $('#slider').css("background-position-x",0 + "%");
        }
    }
    $("#arrow_right").click(slideRight);
    $("#arrow_left").click(slideRight);
});



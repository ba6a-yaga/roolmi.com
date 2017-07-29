$(document).ready(function() {
    var lang = Cookies.get('current_lang');
    var news = []

    if (lang == "en") {
        $.getJSON("shared/json/en/index", function(data) {
            setContent(data)
        })
        $.getJSON("shared/json/en/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/en/news", function(data) {
            news = data
        })
        $('#_x_lang').append("<a class=\"lang lang_en\" href=\"/select_lang?id=ru\">RU</a>");
    } else {
        $.getJSON("shared/json/ru/index", function(data) {
            setContent(data)
        })
        $.getJSON("shared/json/ru/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/ru/news", function(data) {
            news = data
        })
        $('#_x_lang').append("<a class=\"lang lang_ru\" href=\"/select_lang?id=en\">EN</a>");
    }

    function setContent(data) {
        var list = [];
        $('#_x_title_content').append(data.Body.Text[0]);
        $('#_x_text_content').append(data.Body.Text[1]);
        $('#_x_news-title').append(data.NewsTitle);
        for (i in data.Banners) {
            list[i] = "<div class=\"banners-image\"><img src=\""+data.Banners[i].Image+"\" alt=\"\"></div>";
            $('#_x_banners').append(list[i]);
        }
		setBanners()
    }
	
	function setBanners() {
		$(".banners .banners-container").slick({
		  dots: true,
		  arrows: false,
		  speed: 300,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  slidesToShow: 1,
		});
	}

    function setMenu(data) {
        var list = []
        $('#_x_footer').append("<p>"+data.Footer.Text+"<email><a href=\"mailto:"+data.Footer.Email+"\"><strong>"+data.Footer.Email+"</strong></a></email></p>");
        $('#_x_copyright').append("<span>&copy;"+data.Footer.Copyright+"</span>");
        for (i in data.Menu) {
            list[i] = "<li><a href=\""+data.Menu[i].Source+"\">"+data.Menu[i].Title+"</a></li>";
            $('#_x_menu').append(list[i]);
        }
    }

    // Работа с API vk и лента постов
    $.getScript("https://vk.com/js/api/openapi.js?146", function(){
        news.reverse();
        console.log(news)
        for (i in news) {
            $('#_x_news').append("<p id=\"_x_post-"+i+"\"></p>");
        }
        for (i in news) {
            VK.Widgets.Post("_x_post-"+i, news[i].owner_id, news[i].post_id, news[i].hash, {width: 600});
        }
    });
})
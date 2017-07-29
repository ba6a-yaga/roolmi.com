var lang = Cookies.get('current_lang');
var elem_menu = document.getElementById('_x_menu');
var elemBanners = document.getElementById('_x_banners');
var elemBodyTitleContent = document.getElementById('_x_title_content');
var elemBodyTextContent = document.getElementById('_x_text_content');
var elemNewsTitle = document.getElementById('_x_news-title');
var elemFooter = document.getElementById('_x_footer');
var elemCopyright = document.getElementById('_x_copyright');
var elemNews = document.getElementById('_x_news');
var elemLang = document.getElementById('_x_lang');
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
    elemBodyTitleContent.innerHTML = data.Body.Text[0];
    elemBodyTextContent.innerHTML = data.Body.Text[1];
    elemNewsTitle.innerHTML = data.NewsTitle;
    for (i in data.Banners) {
        list[i] = "<div class=\"banners-image\"><img src=\""+data.Banners[i].Image+"\" alt=\"\"></div>";
        elemBanners.innerHTML += list[i];
    }
}

function setMenu(data) {
    var list = []
    elemFooter.innerHTML = "<p>"+data.Footer.Text+"<email><a href=\"mailto:"+data.Footer.Email+"\"><strong>"+data.Footer.Email+"</strong></a></email></p>";
    elemCopyright.innerHTML = "<span>&copy;"+data.Footer.Copyright+"</span>";
    for (i in data.Menu) {
        list[i] = "<li><a href=\""+data.Menu[i].Source+"\">"+data.Menu[i].Title+"</a></li>";
        elem_menu.innerHTML += list[i]
    }
}

// Работа с API vk и лента постов
$.getScript("https://vk.com/js/api/openapi.js?146", function(){
    news.reverse();
    console.log(news)
    for (i in news) {
        elemNews.innerHTML += "<p id=\"_x_post-"+i+"\"></p>";
    }
    for (i in news) {
        VK.Widgets.Post("_x_post-"+i, news[i].owner_id, news[i].post_id, news[i].hash, {width: 600});
    }
});
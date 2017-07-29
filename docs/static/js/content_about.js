$(document).ready(function() {
    var lang = Cookies.get('current_lang');

    if (lang == "en") {
        $('#_x_lang').append("<a class=\"lang lang_en\" href=\"about.html\" onclick=\"setLang()\">RU</a>");
        $.getJSON("shared/json/en/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/en/about", function(data) {
            setContent(data)
        })
    } else {
        $('#_x_lang').append("<a class=\"lang lang_ru\" href=\"about.html\" onclick=\"setLang()\">EN</a>");
        $.getJSON("shared/json/ru/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/ru/about", function(data) {
            setContent(data)
        })
    }

    function setContent(data) {
        var list = [];
        $('#_x_page-title').append(data.Body.Title);
        for (i in data.Body.Text) {
            $('#_x_page-text').append(data.Body.Text[i])
        }
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
});
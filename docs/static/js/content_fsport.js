$(document).ready(function() {
    var lang = Cookies.get('current_lang');

    if (lang == "en") {
        $('#_x_lang').append("<a class=\"lang lang_en\" href=\"formulasport.html\" onclick=\"setLang()\">RU</a>");
        $.getJSON("shared/json/en/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/en/formula_sport", function(data) {
            setContent(data)
        })
    } else {
        $('#_x_lang').append("<a class=\"lang lang_ru\" href=\"formulasport.html\" onclick=\"setLang()\">EN</a>");
        $.getJSON("shared/json/ru/main", function(data) {
            setMenu(data)
        })
        $.getJSON("shared/json/ru/formula_sport", function(data) {
            setContent(data)
        })
    }

    function setContent(data) {
        var list = [];
        $('#_x_page-title').append(data.Body.Title);
        $('#_x_page-img').append("<img src="+data.Body.Image[0]+"/>")
        for (i in data.Body.Text) {
            $('#_x_page-text').append(data.Body.Text[i])
        }
        for (i in data.Body.Image) {
            if (i != 0) {
                $('#_x_page-imgs').append("<li class=\"screen col-md-4 col-sm-4  col-xs-12\"><img src="+data.Body.Image[i]+"></li>")
            }
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
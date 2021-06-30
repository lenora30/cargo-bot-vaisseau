
$(window).scroll(function() {

    var posScroll = $(this).scrollTop() / 20;

    $("#debut").css({
        "background-size" : 100 + posScroll + "%"
    })
})

jQuery( document ).ready(function($) {
    $(document).on('scroll', function () {
        if(isScrolledIntoView($('#skills'))) {
            $('#skills').removeClass('not-shown');
        }
    })

});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
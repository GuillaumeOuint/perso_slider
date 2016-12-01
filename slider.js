$('.fillemin-right').on('click', function() {
    $('#file').animate({
        scrollLeft: "+=" + 207 + "px"
    });
});
$('.fillemin-left').on('click', function() {
    $('#file').animate({
        scrollLeft: "-=" + 207 + "px"
    });
});
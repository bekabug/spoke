jQuery(document).ready(function() {
    $('.calendar-element-numbers').html(function (i, html) {
        return html.replace(/(\d)/g, '<span>$1</span>');
    });
});
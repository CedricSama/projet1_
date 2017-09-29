/*
$(document).ready(() => {
    let button = $('button');
    let monInput = $('#monInput');

    let SearchFunction = (function () {
        console.log(monInput.val());
        $.ajax({
            url: "",
            type: "",
            dataType: "",
            success: "",
            error: ""
        });
    });

    button.click(SearchFunction);
    monInput.keyup(function (e) {
        if (e.key === "Enter") {
            SearchFunction();
        }
    });

});*/
(function ($) {
    $('#btnContactUs').click(function (e) {
        e.preventDefault();
    });
})(jQuery);

$(document).ready(function(){

    $('.option').on("click", function () {
        $('.box').toggleClass('open');
    });
    $('body').on('click', function (e) {
        if (!$(e.target).closest('.box').length) {
            $('.box').removeClass('open');
        }
    });
    $('.green').on("click", function () {
        $('#color').attr("href", "css/green.css");
    });
    $('.blue').on("click", function () {
        $('#color').attr("href", "css/blue.css");
    });
    $('.orange').on("click", function () {
        $('#color').attr("href", "css/orange.css");
    });
    $('.purple').on("click", function () {
        $('#color').attr("href", "css/purple.css");
    });
    $('.crimson').on("click", function () {
        $('#color').attr("href", "css/crimson.css");
    });

});

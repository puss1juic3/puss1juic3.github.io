//JQuery
//= ../../../node_modules/jquery/dist/jquery.js
//Popper for Bootstrap
//= ../../../node_modules/popper.js/dist/umd/popper.js
//Bootstrap
//= ../../../node_modules/bootstrap/dist/js/bootstrap.js

$('.form__input').focus(function () {
    $(this).parent().addClass('active');
});

$('.form__input').focusout(function () {
    $(this).parent().removeClass('active');
});
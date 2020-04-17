
$('.intro-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    customPaging: function(slick,index) {
        switch (index) {
            case 0:
                return '<span class="slider__item-number">' + '0' + (index + 1) +'</span>' +
                    '<span class="slider__item-text">' + ' Intro</span>';
            case 1:
                return '<span class="slider__item-number">' + '0' + (index + 1) +'</span>' +
                    '<span class="slider__item-text">' + ' Work</span>';
            case 2:
                return '<span class="slider__item-number">' + '0' + (index + 1) +'</span>' +
                    '<span class="slider__item-text">' + ' About</span>';
            case 3:
                return '<span class="slider__item-number">' + '0' + (index + 1) +'</span>' +
                    '<span class="slider__item-text">' + ' Contact</span>';
        }

    }
});

$('.quote').slick({
    infinite: true,
    arrows: true
});

$(function() {
    $('.accordion_header').click(function(event) {

        if($('.spoiler').hasClass('accordion')) {
            $('.accordion_header').not($(this)).removeClass('active');
            $('.accordion_content').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);

    });
});

$(function () {
    $('.burger').click(function () {
        $(this).toggleClass('active');
    });
});
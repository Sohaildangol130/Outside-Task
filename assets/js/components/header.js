$(() => {
    $('.nav-items__single-item .single-item__text').on('click', function(){
        if ($(this).closest('.nav-items__single-item').find('.single-item__dropdown').length != 0){
            $('.header__nav-bar').toggleClass('header__nav-bar--active');
            $('.header__overlay').toggle();
            $(this).closest('.nav-items__single-item').toggleClass('nav-items__single-item--active');
        }
    })
    $('.mobile__burger').on('click', function(){
        $('.header__nav-bar').toggleClass('header__nav-bar--active');
        $('.header__overlay').toggle();
    })
})
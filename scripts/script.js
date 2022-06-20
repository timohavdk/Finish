$(document).ready(function(){
    $('.nav__burger').click(function(event){
        $('.nav__burger,.nav__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.studying-programs__item-p').click(function(){
        if($('.studying-programs__column').hasClass('one')){
            $('.studying-programs__item-p').not($(this)).removeClass('active');
            $('.studying-programs__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function(){
    $('.contact__item-p').click(function(){
        if($('.contact__body').hasClass('one')){
            $('.contact__item-p').not($(this)).removeClass('active');
            $('.contact__slider-box').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(document).ready(function(){
    $('.continue').click(function(){
        if($('.slider').hasClass('.one')){
            $('.continue').not($(this)).removeClass('active');
            $('.full').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function(){
    $('.prev').click(function(){
        var continueButton = document.querySelectorAll('.continue');
        for (var i = 0; i < continueButton.length; i++){
            if ($(continueButton[i]).hasClass('active') == true){
                $(continueButton[i]).removeClass('active');
                $(continueButton[i]).next().slideUp(300);
            }
        }
        var fullBlock = document.querySelectorAll('.full');
        for (var i = 0; i < fullBlock.length; i++){
            if (fullBlock[i].hasAttribute('style') == 'display: block;'){
                fullBlock[i].setAttribute('style') = 'display: none';
            }
        }
    });
});

$(document).ready(function(){
    $('.next').click(function(){
        var continueButton = document.querySelectorAll('.continue');
        for (var i = 0; i < continueButton.length; i++){
            if ($(continueButton[i]).hasClass('active')){
                $(continueButton[i]).removeClass('active');
                $(continueButton[i]).next().slideUp(300);
            }
        }
        var fullBlock = document.querySelectorAll('.full');
        for (var i = 0; i < fullBlock.length; i++){
            if (fullBlock[i].hasAttribute('style') == 'display: block;'){
                fullBlock[i].setAttribute('style') = 'display: none';
            }
        }
    });
});

/*$(document).ready(function(){
    $('.next').click(function(){
        document.getElementsByClassName('.continue').removeClass('active');
        document.getElementsByClassName('.full').display('none');
    });
});*/

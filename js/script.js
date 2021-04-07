// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		variableWidth:true,
		speed:300,
		waitForAnimate: true,
		easing: 'ease',
		infinite: true,
		swipe: true,
		draggable: true,
		touchMove: true,
		touchThreshold: 100,
		swipeToSlide: true
	});
	
	$('.category').slick({
		arrows:true,
		adaptiveHeight: true,
		slidesToShow:6,
		variableWidth: true,
		speed: 300,
		waitForAnimate: true,
		easing: 'ease',
		touchTreshhold: 100,
		infinite: true,
		swipe: true,
		draggable: true,
		touchMove: true,
		swipeToSlide: true
	});
	
});

// Анимация появления снизу
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
				
			}

		}

	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// Анимация появления снизу---end

// Споллеры
$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


// Меню-бургер
$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});



// Изменение шапки при скролле
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 200 ) {
        $('.content,.header-scroll').addClass('scrolled');

    }   
    if( scrolled <= 200 ) {     
        $('.content,.header-scroll').removeClass('scrolled');
    }
});


$('li.dropdown').click(function() {
    $(this).nextUntil('li.dropdown').slideToggle('slow');
});






 // скрытие текста
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше"; 
    moreText.style.display = "inline";
  }
}     // скрытие текста - end





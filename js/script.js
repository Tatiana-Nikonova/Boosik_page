// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		variableWidth:true,
		speed:1000
	});
	
	$('.category').slick({
		arrows:true,
		slidesToShow:6,
		slidesToScroll:1,
		variableWidth:true,
		speed:1000,
		waitForAnimate:false
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






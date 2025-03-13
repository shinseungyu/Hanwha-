//scrolla.js
$(function () {

	const $menuBtn = $('#hamburger');
	const $mainMenu = $('.innerHeader .gnb');

	$menuBtn.on('click', function () {
		$(this).toggleClass('active');

		// active 클래스 여부에 따라 mainMenu 클래스 추가/제거
		if ($(this).hasClass('active')) {
			$mainMenu.addClass('active');
		} else {
			$mainMenu.removeClass('active');
		}
	});

	Splitting();


	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});
});





//splitting.js

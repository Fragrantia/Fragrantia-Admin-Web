$(document).ready(function(){
	// 메뉴 토글 버튼 클릭 시 메뉴 토글
	$('.menu-toggle-btn').click(function(){
		$('.main_nav').animate({width:"toggle"}, 200);
		$('.wrap').toggleClass('open');
	});

	// 문서의 다른 영역 클릭 시 메뉴 닫기
	$(document).click(function(event){
		// 메뉴가 열린 상태에서만 메뉴 외부 요소를 클릭한 경우 메뉴 닫기
		if($('.main_nav').is(':visible') && !$(event.target).closest('.main_nav, .menu-toggle-btn').length){
			$('.main_nav').animate({width:"toggle"}, 50);
			$('.wrap').removeClass('open');

		}
	});
});
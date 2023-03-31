// colspan size 조절 함수
let reColspan = function () {
    if ($(window).width() <= 768) {
        // colspan 속성이 4인 td 요소를 찾아서
        $("tr.shop-content td[colspan='4']").each(function () {
            // colspan 속성 값을 3으로 변경
            $(this).attr("colspan", "3");
        });
    }
    // 데스크탑 버전인 경우
    else {
        // colspan 속성이 3인 td 요소를 찾아서
        $("tr.shop-content td[colspan='3']").each(function () {
            // colspan 속성 값을 4로 변경
            $(this).attr("colspan", "4");
        });
    }
}

$(document).ready(function () {
    $('.shop-header').click(function () {
        var content = $(this).closest('tr').next('.shop-content');
        content.fadeToggle('slow'); // 클릭한 요소 열기/닫기
        $('.shop-content').not(content).fadeOut(); // 이미 열려있는 요소 닫기
    });

    //시작 할때 colspan 화면 크기에 맞게 설정
    reColspan()
});


$(window).resize(
    //화면 바꿀 때 colspan 화면 크기에 맞게 설정
    reColspan
);

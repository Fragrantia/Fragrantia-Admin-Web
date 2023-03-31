// colspan size 조절 함수
let reColspan = function () {
    if ($(window).width() <= 768) {
        // colspan 속성이 4인 td 요소를 찾아서
        $("tr.shop-content td[colspan='5']").each(function () {
            // colspan 속성 값을 3으로 변경
            $(this).attr("colspan", "3");
        });
    }
    // 데스크탑 버전인 경우
    else {
        // colspan 속성이 3인 td 요소를 찾아서
        $("tr.shop-content td[colspan='3']").each(function () {
            // colspan 속성 값을 4로 변경
            $(this).attr("colspan", "5");
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

    // chkAll을 클릭했을 때, chkAll이 체크되어 있으면, name이 chk인 input 태그의 checked 속성을 true로 설정
    // >> 전체 체크 박스를 체크하면 모든 체크 박스 체크 
    $("#chkAll").click(function() {
        if($("#chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
        else $("input[name=chk]").prop("checked", false);
      });
      // name이 chk인 input 태그를 클릭하면, name이 chk인 요소의 개수를 total 변수에 저장.
      // name이 chk인 요소 중에 checked 되어 있는 요소의 개수를 checked 개수에 저장.
      $("input[name=chk]").click(function() {
        var total = $("input[name=chk]").length;
        var checked = $("input[name=chk]:checked").length;
    
        // total 값이 checked의 값와 같지 않으면 id가 chkAll인 객체의 checked 속성을 false로 바꿈.
        // 그게 아니면 checked 속성을 true로 바꿈. 
        if(total != checked) $("#chkAll").prop("checked", false);
        else $("#chkAll").prop("checked", true); 
      });
  
});


$(window).resize(
    //화면 바꿀 때 colspan 화면 크기에 맞게 설정
    reColspan
);

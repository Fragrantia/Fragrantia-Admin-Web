// colspan size 조절 함수
let reColspan = function () {
    if ($(window).width() <= 768) {
        // colspan 속성이 5인 td 요소를 찾아서
        $("tr.customerService-content td[colspan='5']").each(function () {
            // colspan 속성 값을 3으로 변경
            $(this).attr("colspan", "3");
        });
    }
    // 데스크탑 버전인 경우
    else {
        // colspan 속성이 3인 td 요소를 찾아서
        $("tr.customerService-content td[colspan='3']").each(function () {
            // colspan 속성 값을 5으로 변경
            $(this).attr("colspan", "5");
        });
    }
}

$(document).ready(function () {
    $('.customerService-header').click(function () {
        var content = $(this).closest('tr').next('.customerService-content');
        content.fadeToggle('slow'); // 클릭한 요소 열기/닫기
        $('.customerService-content').not(content).fadeOut(); // 이미 열려있는 요소 닫기
    });
    $('input[type="checkbox"]').click(function(event) {
      event.stopPropagation(); // 클릭 이벤트 전파 방지
  });
    //시작 할때 colspan 화면 크기에 맞게 설정
    reColspan()

});

// Send Answer 버튼 누른 후에 동작 구현
document.addEventListener('DOMContentLoaded', () => {
  const sendAnswerBtn = document.querySelector('.content_btn button');
  const askAnswerTextarea = document.getElementById('ask_answer');
  sendAnswerBtn.addEventListener('click', () => {
    if (!askAnswerTextarea.value.trim()) {
      alert("답변을 입력해주세요.");
      return;
    } else {
      alert("성공적으로 전송되었습니다!");
      askAnswerTextarea.value = '';
    }
  });
});

$(window).resize(
    //화면 바꿀 때 colspan 화면 크기에 맞게 설정
    reColspan  
);

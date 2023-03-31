$(function () {
    $("#find-account-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength: 7,
            },
            email: {
                required: true,
                email: true
            },
            branch: {
                required: true,
                minlength: 1,
                maxlength: 7,
            },
        },
        messages: {
            name: {
                required: "이름을 입력해주세요",
                minlength: "최소 4자 이상 입력해주세요",
                maxlength: "최대 7자 이하로 입력해주세요",
            },
            email: {
                required: "이메일을 입력해주세요",
                email: "올바른 이메일 형식을 입력해주세요"
            },
            branch: {
                required: "매장 이름을 입력해주세요",
                minlength: "최소 1자 이상 입력해주세요",
                maxlength: "최대 7자 이하로 입력해주세요",
            },
        },
        submitHandler: function (form) {
            alert('계정 복구 신청을 완료 했습니다!');
            form.submit();
            window.location.href = './login.html'
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().next());
        }
    });
});
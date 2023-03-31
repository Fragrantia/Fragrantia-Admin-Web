$(function () {
    $("#login-form").validate({
        rules: {
            id: {
                required: true,
                minlength: 5,
                maxlength: 20,
            },
            password: {
                required: true,
                minlength: 7,
                maxlength: 30,
            }
        },
        messages: {
            id: {
                required: "아이디를 입력해주세요",
                minlength: "5자 이상 입력해주세요",
                maxlength: "20자 이하로 입력해주세요",
            },
            password: {
                required: "비밀번호를 입력해주세요",
                minlength: "7자 이상 입력해주세요",
                maxlength: "30자 이하로 입력해주세요",
            }
        },
        submitHandler: function (form) {
            alert('로그인 되었습니다!');
            window.location.href = './login.html'
            form.submit();
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().next());
        }
    });
});

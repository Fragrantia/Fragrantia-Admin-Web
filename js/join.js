$(function () {
    $("#join-form").validate({
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
            },
            'confirm-password': {
                required: true,
                equalTo: "#password"
            },
            name: {
                required: true,
                maxlength: 20,
            },
            branch: {
                required: true,
                maxlength: 20,
            },
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
            },
            'confirm-password': {
                required: "비밀번호를 확인해주세요",
                equalTo: "비밀번호가 일치하지 않습니다",
            },
            name: {
                required: "이름을 입력해주세요",
                maxlength: "20자 이하로 입력해주세요",
            },
            branch: {
                required: "지점명을 입력해주세요",
                maxlength: "20자 이하로 입력해주세요",
            },
        },
        submitHandler: function (form) {
            alert('회원가입 신청이 완료 되었습니다!');
            form.submit();
            window.location.href = './login.html'
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().next());
        }
    });
});

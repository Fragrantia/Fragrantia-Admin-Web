$(document).ready(function () {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("minus-button")) {
            var checkedBoxes = $('input[type="checkbox"]#chk:checked');

            if (checkedBoxes.length === 0) {
                alert("삭제할 게시글을 체크해주세요!")
                return;
            }

            if (!confirm("정말 삭제하시겠습니까?")) return

            checkedBoxes.each(function () {
                var tr = $(this).closest("tr");
                tr.next("tr").remove();
                tr.remove();
            });

            alert("성공적으로 삭제되었습니다!")
        }
    });
});

$(document).ready(function () {
    
    if(
        document.title.includes("Notice")||
        document.title.includes("Shop")
    ){
        $('.select_box').remove();
    }
    if(
        document.title.includes("Customer Service")
    ) { 
        $('.button-nav').before('<div></div>');
        $('.button-nav').remove();
        
    }

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

    const modal = document.getElementById("modal");
    const modalButton = document.getElementsByClassName("plus-button")[0];
    const modalClose = document.getElementById("modal-close");
    const modalSubmit = document.getElementById("modal-submit");

    modalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modalSubmit.addEventListener("click", () => {
        alert("게시글이 작성되었습니다.")
        modal.style.display = "none";
    });
    
    $('#category').change(function () {
        var selectCategory = $(this).val();
        var list = Array.from(document.getElementsByClassName('category'));

        list.forEach(element => { //display 초기화
            element.closest('tr').style.display = '';
        });

        if (selectCategory === '전체') { //전체 클릭시 리턴
            return;
        }

        var filterList = list.filter(it => {
            if ($(it).html() === 'Category') { //<th>Category</th>는 제외
                return false;
            }
            return $(it).html() !== selectCategory;
        });

        filterList.forEach(element => {
            element.closest('tr').style.display = 'none'; //선택안된 카테고리 숨김
        });
    });
});

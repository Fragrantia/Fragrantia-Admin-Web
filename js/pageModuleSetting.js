function loadModule(element) {
    let targetElement = '#' + element;

    let css = '../../css/module/' + element + '.css';
    let html = '../../html/module/' + element + '.html';

    $.get(css, function (data) {
        $('head').append('<style class="' + element + '" >' + data + '</style>');
        $(targetElement).load(html);
    });
}

$(function () {
    if (
        document.title.includes("Login") ||
        document.title.includes("Join") ||
        document.title.includes("Find")
    ) {
        loadModule("logoNav")
    } else {
        loadModule('header')
        loadModule('footer')
    }

    if (
        document.title.includes("Notice") ||
        document.title.includes("Shop")
    ) {
        loadModule('buttonNav')
    }
})

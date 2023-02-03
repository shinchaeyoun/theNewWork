function pageInfoIndex($main,$sub) {
    $('.main_title').remove();

    for (var i = 0; i < $main.length; i++) {
        tag += `<ul class="main_title">
        <li>`+ $main[i] + `</li>
        </ul>`
        
        for (let j = 0; j < $sub[i].length; j++) {
            tag += `<ul class="sub">
            <li data-page="0">`+ $sub[i][j] + `</li>
            </ul>`;
        };
    };
    $(".nav").append(tag);
};
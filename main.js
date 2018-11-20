$(document).ready(function() {
    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();

    $(`#title1`).on(`click`, function() {
        $(`#page1`).slideDown();
    })
})

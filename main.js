$(document).ready(function() {

    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();

    $(`#title1`).on(`click`, function() {
        $(`#page1`).slideDown();
        $(`#page2`).slideUp();
        $(`#page3`).slideUp();
        $(`#title1`).text(`Monument Landing Page`);
        $(`#title2`).text(`CLICK TO SEE MY GROCERY STORE PAGE`);
        $(`#title3`).text(`CLICK TO SEE MY TRIVIA API PAGE`);
    })

    $(`#title2`).on(`click`, function() {
        $(`#page1`).slideUp();
        $(`#page2`).slideDown();
        $(`#page3`).slideUp();
        $(`#title2`).text(`Grocery Store Page`);
        $(`#title1`).text(`CLICK TO SEE MY MONMUMENT LANDING PAGE`);
        $(`#title3`).text(`CLICK TO SEE MY TRIVIA API PAGE`);
    })


    $(`#title3`).on(`click`, function() {
        $(`#page1`).slideUp();
        $(`#page2`).slideUp();
        $(`#page3`).slideDown();
        $(`#title3`).text(`Trivia API Page`);
        $(`#title1`).text(`CLICK TO SEE MY MONMUMENT LANDING PAGE`);
        $(`#title2`).text(`CLICK TO SEE MY GROCERY STORE PAGE`);
    })

    var scrolllink = $(`.scroll`);
    scrolllink.click(function(e) {
        e.preventDefault();
        $(`body, html`).animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

    
})

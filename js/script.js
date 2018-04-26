// document.write('DIN JAVASCRIPT');
// $() <=> jQuery()


// console.log( $('.wrap') );

$('.jMore').on('click', function(event) {
    event.preventDefault();
    $('.jOverlay').addClass('is-visible');
});

$('.jClose').on('click', function(event) {
    event.preventDefault();
    $('.jOverlay').removeClass('is-visible');
});

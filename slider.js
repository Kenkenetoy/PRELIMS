document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage: 4,
        focus  : 0,
        omitEnd: true,
      } );

    splide.mount();
});
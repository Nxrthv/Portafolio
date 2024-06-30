document.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.card');
    var windowHeight = window.innerHeight;

    cards.forEach(function(card) {
        var boxPosition = card.getBoundingClientRect().top;

        if (boxPosition < windowHeight) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
});
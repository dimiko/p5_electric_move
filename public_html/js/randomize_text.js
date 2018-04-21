
$('#hello').randomizeText({
    text: "Electric Colony",
    refreshRate: 50,
    timePerLetter: 80,
    randomTime: 50,
    randomLetters: [],
});

var distance = $('#hello').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        // Your div has reached the top
       
    }
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
    pageDots: false,
    // options
});



function listener( /* parameters */ ) {
    console.log('eventName happened');
}
// bind event listener
flkty.on('eventName', listener);
// unbind event listener
flkty.off('eventName', listener);
// bind event listener to trigger once. note ONCE not ONE or ON
flkty.once('eventName', function () {
    console.log('eventName happened just once');
});


var flkty = new Flickity('.main-carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});



var flkty = new Flickity('.main-carousel');

var firstsButton = document.querySelector('.button--first');
firstsButton.addEventListener('click', function () {
    flkty.reset();
});
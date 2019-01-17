// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {});
// restart function
var restart = document.querySelector('.restart');
restart.addEventListener("click", function (event) {
    flkty.select(0);
});
// progress bar
var progressBar = document.querySelector('.progress-bar')
flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});
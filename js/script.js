var mainElement = document.querySelector('.carousel');
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.restart');
var progressBar = document.querySelector('.progress-bar');

var flkty = new Flickity(mainElement, {
    // options
    cellAlign: 'left',
    //disable dots
    pageDots: false,
    // Enable hash behavior
    hash: true,
});
// Use progress bar scroll
flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});
// Use button to restart
buttons = fizzyUIUtils.makeArray(buttons);
buttonGroup.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.restart')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);



});
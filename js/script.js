"use strict";

// Mustache

var templateCarousel = document.getElementById("carousel-template").innerHTML;
var carouselElements = "";
var mainElement = document.querySelector('.carousel');
for (var i = 0; i < slideData.length; i++) {
    carouselElements += Mustache.render(templateCarousel, slideData[i]);
}
mainElement.innerHTML = carouselElements;

// Dots and hash
var mainElement = document.querySelector('.carousel');

var flkty = new Flickity(mainElement, {
    // options
    cellAlign: 'left',
    //disable dots
    pageDots: false,
    // Enable hash behavior
    hash: true,
});

// progress bar scroll
var progressBar = document.querySelector('.progress-bar');
flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

// Use button to restart
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.restart');
buttons = fizzyUIUtils.makeArray(buttons);
buttonGroup.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.restart')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);
});
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


//MAPA GOOGLE
window.initMap = function () {
    // Współrzędne z tablicy z html (coords-wspolrzędne)
    var photoLocation = slideData[0].coords; // pobiera współrzędne miejsc z kodu html. DZIAŁA
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: photoLocation //DZIAŁA
    });

    //DODAWANIE MARKERóW W PĘTLI
    var markerMap = [];
    for (var i = 0; i < slideData.length; i++) {
        markerMap.push(new google.maps.Marker({
            position: slideData[i].coords,
            map: map
        })); //DZIAŁA (5 markerów na stronie)
    }


    // Kliknięcie na marker - przeniesienie do zdjęcia ze slajdu
    //1. Pętla przez wszystkie markery, 
    //2. Event - przycisniecie markera [i] przenosi do slide.data[i].image
    // 3 Przesuwanie slajdu, zmiana pozycji na mapie
    //  for (var i = 0; i < markerMap.length; i++) {
    //      marker[i].addListener('click', function () {
    //       map.panTo(slideData[i].image);
    // map.setZoom(5);
    //      });
    ////   }
}
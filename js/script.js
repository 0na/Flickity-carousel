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
    cellAlign: 'left',
    wrapAround: true,
    pageDots: false, //usuwa kropki pod karuzelą - DZIAŁA
    hash: true //włącza hash (odnosniki do linkow) - NIE DZIAŁA
});

// progress bar scroll
var progressBar = document.querySelector('.progress-bar');
flkty.on('scroll', function (progress) { //przesuwanie slajdów
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

// BUTTON RESETUJACY I POWROT DO PIERWSZEGO SLAJDU
var restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
    flkty.select(0);
});

//MAPA GOOGLE
window.initMap = function () {
    // Współrzędne z tablicy z html (coords-wspolrzędne)
    var photoLocation = slideData[0].coords; // pobiera współrzędne miejsc z kodu html. DZIAŁA
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: photoLocation, //DZIAŁA
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //DODAWANIE MARKERóW W PĘTLI
    slideData.forEach(function (slide, index) {
        const element = new google.maps.Marker({
            position: slide.coords,
            map: map
        });

        element.addListener('click', function () {
            flkty.select(index);
        })
    });
    //Kada zmiana slajdu zmienia pozycje markera na mapie DZIALA 
    flkty.on("change", function (index) {
        map.panTo(slideData[index].coords);
        map.setZoom(5);
    });

}
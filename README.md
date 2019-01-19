Kodilla - Modul 10
https://0na.github.io/Flickity-carousel/

# Flickity-carousel


Nie działa : 
10.1 karuzela zmieniała url strony dodając hash, dzięki czemu po odświeżeniu strony będzie widoczny ostatnio oglądany slajd (opcja "hash" z Options w dokumentacji).
10.4 Etap 1 - zmiana slajdu po kliknięciu w marker
Znajdź w swoim kodzie JS pętlę, za pomocą której dodajesz markery na mapie. W tej pętli, po dodaniu markera, dodaj akcję na zdarzenie kliknięcia tego markera.

Wewnątrz tej akcji ma wykonywać się bardzo podobny kod do tego, który wykonuje się w reakcji na kliknięcie guzika "Reset". Jedyna różnica, to że zamiast do slajdu o indeksie 0, karuzela ma się przewijać do slajdu o indeksie i (zakładając, że Twoja pętla używa zmiennej i jako iteratora).

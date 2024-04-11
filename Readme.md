# Listakezelő függvények gyakorlás 

## Specifikáció

Jelenítsük meg az adatainkat egy táblázatban az adatok div-ben.
Az urlap div-ben legyen egy űrlap, 
amivel ilyen adatokat tudunk a táblázatba beletenni
a táblázat fejlécére kattintva rendezzük a táblázatot név szerint
Tudjunk törölni a táblázatból egy sort
legyen egy szűrőmező, ami segítségével név szerint tudjuk szűrni az adatainkat. 

## Függvények

1. *** tablazatLetrehoz(lista) -> txt; ***   lista alapján készít html kódot, táblázatot, viszaadja  az elkészült html szöveget, minden sor mellett egy törlés ikonnal. 

2. *** megjelenit(txt); *** - meglejelítni a paraméterében kapott szöveget egy adott html elemben. 

3. *** rendez(lista)-> rlista; ***  megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja  akkor fut le, amikor rákattintunk a táblázat fejlécére. 

4. *** szures(lista, keresoSzoveg) -> szurtLista; *** akkor fog lefutni, ha a szürőmezőben váltopzás történik (keyup) - a listában a név mezőben keres egyezéseket, és szűri a listát ez alapján - filter 

5. *** sorBeszur(lista) -> ujLista; ***  ha a submit gombra kattintunk akkor fut le a függvény, űrlapadatokat átalakítjuk objektummá, és hozzuáadjuk a listához (push)

6. *** torol(lista, index ) *** - törli a lista indexedik  sorát. - minden sor mellett lesz egy torol ikon, amire kattintva megkapjuk az adott sor indexét, és meghívódik a torol függvény. 



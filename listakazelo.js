import { emberekLISTA } from "./adat.js";


for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element)
}

emberekLISTA.forEach(function (ember, i) {
    console.log(ember.nev, i)

})
/* adatLISTA.forEach((element,index) => {
    console.log(element)
    console.log(index)

})
 */

/* szűrjük a férfiakra a listának */

const FERFIAK = emberekLISTA.filter(function (ember) {
    return !ember.nem  //ez az érték mindig logikai változó! true/false
})
const FERFIAK2 = emberekLISTA.filter((ember) => {
    return !ember.nem  //ez az érték mindig logikai változó! true/false
})

console.log(FERFIAK)
/* azokat az embereket szeretném, akik 20 évnél fiatalabbak */
const FIATALOK=emberekLISTA.filter(function(ember){
    return ember.kor<20
})
console.log(FIATALOK)
/*  10 évnél idősebb férfiak */

const FERFIAK10FELETT=emberekLISTA.filter((ember)=>{
    return ember.kor>10 && !ember.nem
})

/* RENDEZÉS */
/*  rendezzük fordított sorrendbe kor szerint az embereinket */
emberekLISTA.sort(function(e1,e2){
    console.log(e1.kor, e2.kor, e1.kor-e2.kor)
    return e2.kor-e1.kor
})
console.log(emberekLISTA)

/*  véletlen sorrendű rendezés, kor szerint keverés */
/* emberekLISTA.sort(function(e1,e2){

  
    return Math.random()-0.5
})
console.log(emberekLISTA) */



1. ha a táblázat név fejlécére kattintunk, akkor azon mező szerint 
tudjuk rendezni a táblázatot. 
2. tudjuk törölni a táblázat adott sorát
3. legyen egy szűrőmező, ahova beírva szavakat, tudunk szűrni, név szerint. 

Milyen függvények kellenek? 

1. tablazatOsszeallit(lista)->txt - összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka!
2. megjelenites(txt)->nincs - megjelníti egy html szoveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az űrlapadatokat, és hozzáfűzi a listához, majd megjeleníti újra a táblázatot. - akkor hívódik meg, ha a Submit gombra kattintunk
4. tablazatRendez(lista) - adott mező szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát, és megjelenítjük újra a táblázatot. 
5. sorTorles(lista, index) - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.  
6. szuresNevSzerint(lista, szurtSzoveg) -> szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
Ezután megjelenítjük a szűrt listát az oldalon. 
Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma 
 
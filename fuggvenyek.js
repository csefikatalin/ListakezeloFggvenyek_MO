import { rendez, szures } from "./listakezeloFuggvenyek.js";

export function init(lista) {
    let txt = tablazatLetrehoz(lista);
    megjelenit(lista, txt);
    sorTorol(lista);
}
export function tablazatLetrehoz(lista) {
    let txt =
        "<div class='table-responsive'> <table class='table table-striped'>";
    txt += "<thead>";
    txt += "<tr><th id='tnev'>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr>
            <td>${elem.nev}</td>
            <td>${elem.kor}</td>
            <td>${elem.nem ? "nő" : "férfi"}</td>            
            <td><button id="${index}" class="torol">🗑️</button></td>            
        </tr>`;
    });
    txt += "</tbody>";
    txt += "</table> <div> ";
    return txt;
}
let irany = 1;
export function megjelenit(lista, txt) {
    const ELEM = $(".adatok");
    ELEM.html(txt);
    rendezEsemenyHozzaad(lista);
}
function rendezEsemenyHozzaad(lista) {
    const tNevELEM = $("#tnev");
    tNevELEM.on("click", function () {
        rendez(lista, irany);
        irany *= -1;
        init(lista);
    });
}

export function szurtEsemenyHozzad(lista) {
    const szuroELEM = $("#sznev");
    szuroELEM.on("keyup", () => {
        console.log(szuroELEM.val());
        let szurtLista = szures(lista, szuroELEM.val().toUpperCase());
        init(szurtLista);
    });
}

export function sorBeszur(lista) {
    console.log(lista);
    $("#submit").on("click", function (event) {
        event.preventDefault();

        const urlapObj = {
            nev: $("#nev").val(),
            kor: $("#kor").val(),
            nem: $("input[name='nem']:checked").val(),
        };
        let elso = $(".valid-feedback").eq(0).css("display") !== "none";
        let masodik = $(".valid-feedback").eq(1).css("display") !== "none";
        if (elso || masodik) {
            console.log(urlapObj);
            lista.push(urlapObj);
            init(lista)
        } else {
            console.log("Hibás adatok!");
        }
    });
}

export function sorTorol(lista) {
    const torolGOMBOK = $("button.torol");
    torolGOMBOK.on("click", function (event) {
        let index = event.target.id;
        console.log(index);
        lista.splice(index, 1);
        init(lista);
    });
}

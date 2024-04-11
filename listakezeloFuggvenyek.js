export function rendez(lista, irany){
    lista.sort((a,b)=>{
        let anev=csere(a.nev.toUpperCase())
        let bnev=csere(b.nev.toUpperCase())
        console.log(irany)
        
        return anev<bnev?-1*irany:1*irany
    })
    console.log(lista)
    return lista 
}

function csere(str){
    
    const betuLISTA=['Á','A','É','E','Ő','O','Ö','O','Ó','O','Ú','U','Ű','U','Ü','U','Í','I']
    for (let index = 0; index < betuLISTA.length; index+=2) {
       str=str.replaceAll(betuLISTA[index],betuLISTA[index+1])
    }
    return str
}

export function szures(lista, keresoSzoveg) {
    const szurtLISTA= lista.filter((elem)=>{

        return elem.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })
    return szurtLISTA
}
//zad2
// XOR - tekst w bitach xorujemy przez klucz , żeby go odczytac , xorujemu ponowanie i elo 

let seed;
let wielomian;
let stan;// tablica okreslająca stany wewnętrzne układu
let maska;
const zad1next =  function(){
    if(stan==undefined || wielomian==undefined)
        return;
    let wynik=undefined;
    let dlugosc = stan.length;

    for(let i=dlugosc-1;i>=0; i--){ // operacja XOR na bitach gdzie maska jest równa 1- leci od prawej do lewej 
        if(maska[i]!='0')
        {
            if(wynik==undefined)
                wynik = stan[i];
            else{
                wynik = (Number.parseInt(wynik) ^ Number.parseInt(stan[i])).toString();
            }
        }
    }

    stan.shift();// wywalenie najstarszego bitu (tego po lewej)
    stan.push(wynik);

    document.getElementById("zd1wynik").innerHTML += wynik;
    return wynik;
}
const zad1Uklad = function(){
    let localseed = document.getElementById("zad1seed").value.split('');
    let localwielomian = Number.parseInt(document.getElementById("zad1stopien").value);
    let localmaska = document.getElementById("zad1maska").value.split('');

    inicjacjaLFSR(localwielomian,localmaska,localseed);

}


const inicjacjaLFSR = function(_wielomian, _maska, _seed ){
    seed = _seed;
    wielomian=_wielomian;

    stan = new Array(wielomian).fill('0');

    maska = new Array(wielomian).fill('1');

    for(let i = 0;i<_maska.length;i++){
        maska[wielomian-1-i]=_maska[_maska.length-1-i];
    }
    
    
    for(let i = 0;i<seed.length;i++){
        stan[wielomian-1-i]=seed[seed.length-1-i];
    }
    document.getElementById("zd1wynik").innerHTM="";
    alert("zainiciowano "+ wielomian+" bitowy LFSR" )
}



const zad3Kodowanie= function(){
    let localseed = document.getElementById("zad3seed").value.split('');
    let localwielomian = Number.parseInt(document.getElementById("zad3stopien").value);
    let localmaska = document.getElementById("zad3maska").value.split('');
    let localwiadomosc = document.getElementById("zad3wiadomosc").value.split('');

    let wynik = "";

    inicjacjaLFSR(localwielomian,localmaska,localseed);

    for(let i=0;i<localwiadomosc.length;i++){
        let tmp =  (Number.parseInt(zad1next())^ Number.parseInt(localwiadomosc[i])).toString();
        wynik+=tmp;
    }


    document.getElementById("zd3wynik").innerHTML= wynik;
}




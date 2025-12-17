console.log("Inizio controllo esecuzione")
let d= new Date();
console.log(d);
document.getElementById("saluto").innerHTML = "Oggi è "+ d;
let colori = new Array();
let i = 0;

function elabora() {
    let numero = document.getElementById("inNumber").value;
    console.log(numero);
    alert(numero);

    let testo = document.getElementById("inText").value;
    console.log(testo);

    if (numero < 0 || numero > 255) {
        colori.push(numero);
        document.getElementById('error').innerHTML = "Hai inserito il numero" + numero;
        console.log(colori);
        document.getElementById('error'),innerHTML += "<br> i colori sono" + colori;
        i++;
        if (i == 3){
            let newColor = `rgb(${colori[0]},${colori[1]},${colori[2]})`
            document.getElementById("outText").style.color=newColor;
            return;
        }
    }
    else {
        document.getElementById(outText).innerHTML = numero;
        colori.push(numero);
        console.log(colori);
    }
}

function annulla() {
    document.getElementById("inNumber").value = '';
    document.getElementById("inText").value = "";
}
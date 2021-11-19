// l programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

let numKm = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
let age = parseInt(prompt("Quanti anni hai?"));

console.log(numKm, age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let price = parseFloat(numKm * 0.21 +"€").toFixed(2);
console.log(price);

// va applicato uno sconto del 20% per i minorenni

let discountYoung = parseFloat(price * 20 / 100).toFixed(2);
console.log("Sconto per i miorenni " + (discountYoung) + "€");

// va applicato uno sconto del 40% per gli over 65.

let discountOlder = parseFloat(price * 40 / 100).toFixed(2);
console.log("Sconto per gli over 65 " + (discountOlder) + "€");

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


if (age < 18) {
    let finalPrice = parseFloat(price - discountYoung).toFixed(2);

    console.log("Prezzo finale minorenni " + (finalPrice) + "€" );

    document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (finalPrice) + "€";

} else if (age > 65) {
    let finalPrice = parseFloat(price - discountOlder).toFixed(2);

    console.log("Prezzo finale per gli over 65 " + (finalPrice) + "€" );

    document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (finalPrice) + "€";

}  else {
     let finalPrice = price;

     console.log("Prezzo finale per tutti gli altri " + (finalPrice) + "€" );

     document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (finalPrice) + "€";
}
    


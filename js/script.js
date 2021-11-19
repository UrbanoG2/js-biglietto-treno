// l programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

let numKm = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
let age = parseInt(prompt("Quanti anni hai?"));

console.log("Km " + numKm, "Age " + age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let price = parseFloat(numKm * 0.21 +"€").toFixed(2);
console.log("Total price " + price);

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let finalPrice = 0

if (age < 18) {

    // va applicato uno sconto del 20% per i minorenni

    let discountYoung = (price * 20 / 100);
    console.log("Sconto per i miorenni " + (discountYoung) + "€");

    finalPrice = (price - discountYoung).toFixed(2);

    console.log("Prezzo finale " + (finalPrice) + "€" );

    document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (finalPrice) + "€";

} else if (age > 65) {

    // va applicato uno sconto del 40% per gli over 65.

    let discountOlder = (price * 40 / 100);
    console.log("Sconto per gli over 65 " + (discountOlder) + "€");

    finalPrice = (price - discountOlder).toFixed(2);

    console.log("Prezzo finale " + (finalPrice) + "€" );

    document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (finalPrice) + "€";

}  else {

     console.log("Prezzo finale per età compresa tra i 18 e i 65 " + (price) + "€" );

     document.getElementById("random_id").innerHTML = "Il tuo biglietto costerà " + (price) + "€";
}
    


// RACCOLTA DATI

// Chiedere numero all'utente
const userNumber = parseInt(prompt("Scrivi un numero compreso tra 1 e 5!"));
console.log(userNumber);

// Chiedere all'utente di scegliere tra pari e dispari
const userChoice = prompt("Pari o dispari?");
console.log(userChoice);

// Generare un numero random tra 1 e 5
const rndNumber = Math.floor(Math.random() * 5) + 1;
console.log(rndNumber);

// Sommare il numero dell'utente e il numero random generato dal programma
const somma = userNumber + rndNumber;
console.log(somma);


/**
 * Dato un numero restituisce "even" se è numero pari, "odd" altrimenti
 * @param {number} numberToTest il numero da analizzare
 * @returns {string} 
 */

// STABILIRE SE SOMMA PARI O DISPARI

function oddEven(numberToTest) {
    let result = "";
    // Se il numero è pari, salvo "even"
    if (numberToTest % 2 === 0) {
        result = "pari";
    } else {
        // Altrimenti salvo "odd"
        result = "dispari";
    }
    // return del risultato
    return result;
}

// INVOCAZIONE DELLA FUNZIONE
oddEven(numberToTest);
console.log(oddEven(numberToTest));

// CONFRONTARE ESITO CON SCELTA DELL'UTENTE

let message = "";

if (result === userChoice) {
    message = "Hai vinto!";
} else {
    message = "Peccato, hai perso! Riprova!";
}

console.log(message);
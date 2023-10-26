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

const somma = userNumber + rndNumber;
console.log(somma);
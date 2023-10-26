// RACCOLTA DATI
// Chiedere parola all'utente
const userChoice = prompt("Scrivi qui la parola che hai scelto!");
console.log(userChoice);

// LOGICA DEL PROGRAMMA

// Controllo della parola
// Creare una funzione che analizzi la parola lettera per lettera al contrario

function reverse(userWord) {
    reverseWord = ""; 
    for (let i = userWord.length -1; i >= 0; i--) {
        const wordLetter = userWord[i];
        reverseWord += wordLetter;
    }
    return reverseWord; 
}

// INVOCAZIONE DELLA FUNZIONE
reverse(userChoice);
console.log(reverse(userChoice));

// ISTRUZIONE CONDIZIONALE
if (userChoice === reverseWordArray ) {
    console.log("Parola palindroma");
} else {
    console.log("Parola non palindroma");
}



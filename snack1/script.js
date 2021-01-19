let utente = parseInt(prompt("Inserisci un numero. Se è dispari stamperò il successivo, se è pari quello inserito"));

if (utente % 2 == 0){
    console.log(utente);
} else {
    console.log(++utente);
}
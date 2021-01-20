// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

const utente1 = parseInt(prompt("Inserisci l'indice di partenza"));
const utente2 = parseInt(prompt("Inserisci l'indice finale"));
const risultato =[myArray[utente1], myArray[utente2]];

// risultato.push(myArray[utente1],myArray[utente2]);

const filteredArray = myArray.filter((element, index) => {
    return element[index] === [...myArray[utente1], ...myArray[utente2]];
    

});

console.log(filteredArray);
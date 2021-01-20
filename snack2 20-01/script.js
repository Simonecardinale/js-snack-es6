// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'

const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
const risultato = []

const utente1 = parseInt(prompt("Inserisci l'indice di partenza"));
const utente2 = parseInt(prompt("Inserisci l'indice finale"));



// const filteredArray = myArray.filter((element, index) => {
//     return (index < utente2 && index> utente1);
// });

// console.log(filteredArray);

//Metodo Foreach

myArray.forEach((element, index) =>{
    if (index < utente2 && index> utente1) {
        risultato.push(element);
    }
});
console.log(risultato);


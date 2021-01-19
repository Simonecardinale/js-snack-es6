// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pari = [];
const dispari = [];

for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        pari.push(array[i]);
        document.getElementById('verde').innerHTML = pari;
    } else {
        dispari.push(array[i]);
        document.getElementById('rosso').innerHTML = dispari;
    }
}
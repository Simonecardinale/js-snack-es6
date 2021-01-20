// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
    {
        nome: 'veloce',
        peso: 85
    },
    {
        nome: 'lenta',
        peso: 68
    },
    {
        nome: 'pesante',
        peso: 120
    },
    {
        nome: 'leggera',
        peso: 36
    }
];


const [ , , , pesoLast] = bici;

console.log(`
${pesoLast.peso}
`);





// Metodo col for each

// let min = bici[0].peso;
// bici.forEach((element) => {
//     if (element.peso < min) {
//         min = element.peso
//     }
// });
// console.log(min);



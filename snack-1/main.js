/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione(benzina, diesel, gpl, elettrico e metano).
Dividi le automobili in 3 array separate: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel e nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

//Crea un array composto da 10 oggetto automobile con marca, modello e alimentazione

const automobili = [
    {
        'marca': 'fiat',
        'modello': 'panda',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'opel',
        'modello': 'karl',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'suzuki',
        'modello': 'swift',
        'alimentazione': 'elettrica'
    },
    {
        'marca': 'peugeot',
        'modello': '5008',
        'alimentazione': 'diesel'
    },
    {
        'marca': 'landRover',
        'modello': 'freeland',
        'alimentazione': 'diesel'
    },
    {
        'marca': 'fiat',
        'modello': 'panda',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'toyota',
        'modello': 'yaris',
        'alimentazione':'gpl' 
    },
    {
        'marca': 'peugeot',
        'modello':'208',
        'alimentazione': 'benzina'
    },
    {
        'marca': 'fiat',
        'modello': '500',
        'alimentazione': 'metano'
    },
    {
        'marca': 'opel',
        'modello': 'astra',
        'alimentazione': 'benzina'
    }
]

//Dividi le automobili in 3 array separate: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel e nel terzo il resto delle auto.
/* const autoBenzina = automobili.filter((auto) => {
    if (auto.alimentazione === 'benzina'){
        return true
    }
})

const autoDiesel = automobili.filter((auto) => {
    if (auto.alimentazione === 'diesel'){
        return true
    }
})

const autoDiverse = automobili.filter((auto) => {
    if (auto.alimentazione !== 'diesel' && auto.alimentazione !== 'benzina'){
        return true
    }
})

//Infine stampa separatamente i 3 array.
console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoDiverse); */

let autoBenzina = [];
let autoDiesel = [];
let autoDiverse =[];

automobili.filter((auto) => {
    if (auto.alimentazione === 'benzina'){
        autoBenzina.push(auto)
        return true
    } else if (auto.alimentazione === 'diesel'){
        autoDiesel.push(auto)
        return true
    } else {
        autoDiverse.push(auto)
    }
})

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoDiverse);
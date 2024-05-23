/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
*/

const array = ['ciao', 'COME', 'stai', 'CUFFIE']

const newArray = array.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
})

console.log(newArray);


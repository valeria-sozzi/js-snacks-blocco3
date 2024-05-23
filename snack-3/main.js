/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animali = [
    {
        nome:'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome:'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome:'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome:'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome:'cervo',
        famiglia: 'artiodattilo',
        classe: 'mammiferi'
    },
    {
        nome:'serpente',
        famiglia: 'colubridi',
        classe: 'rettili'
    },
]

const listaMammiferi = animali.filter (animale => animale.classe === 'rettili')


console.log(listaMammiferi);
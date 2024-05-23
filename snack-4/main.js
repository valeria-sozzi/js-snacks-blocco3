/*  
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.
Crea quindi un nuovo array inserendo per ogni persona, 
una frase con il nome e cognome e l'indicazione se può guidare, in base all'età 
*/

const persone = [
    {
        nome:'Valeria',
        cognome: 'Sozzi',
        età: 29
    },
    {
        nome:'Roberto',
        cognome: 'Latini',
        età: 28
    },
    {
        nome:'Piero',
        cognome: 'Sozzi',
        età: 62
    },
    {
        nome:'Pina',
        cognome: 'Maddaluno',
        età: 61
    },
    {
        nome:'Giorgia',
        cognome: 'Sozzi',
        età: 33
    },
    {
        nome:'Franca',
        cognome: 'Brini',
        età: 83
    },
    {
        nome:'Giordana',
        cognome: 'Congiu',
        età: 15
    },
    {
        nome:'Gabriel',
        cognome: 'Savi',
        età: 7
    },
    {
        nome:'Samuele',
        cognome: 'Lisi',
        età: 10
    }
]


persone.forEach((persona) =>{
    if (persona.età >= 18 && persona.età < 80 ){
        console.log(`${persona.nome} ${persona.cognome} può guidare`);
    } else {
        console.log(`${persona.nome} ${persona.cognome} non può guidare`);
    }
})

// 1chiedere un numero a utente con prompt

// -creare una costante e il un prompt che chieda un numero 

let numeroUtente

const maxnumeridispari = 10

let contenitoreNumeriDispari = []

// while(isNaN(numeroUtente) || (numeroUtente % 2) === 0 )
// {
//     if(contenitoreNumeriDispari < 10){
//         numeroUtente = parseInt(prompt('Inserisci un numero dispari'))
//     }
// }

for (null; maxnumeridispari; null){

    numeroUtente = parseInt(prompt('Inserisci un numero dispari'))

    if (!isNaN(numeroUtente) && numeroUtente % 3 === 0 ){

        contenitoreNumeriDispari.push(numeroUtente)
    }

    console.log(isNaN(numeroUtente))

    console.log((numeroUtente % 3) === 0)

    contenitoreNumeriDispari.push(numeroUtente)

    console.log('Contenitore numeri dispari', contenitoreNumeriDispari)
}


// se il numero è dispari inserirlo in una lista

// se è pari o NaN scartarlo

// la lista deve constenere 10 numeri

// una volta ottenuta la lista, spamparli uno alla volta

// 1chiedere un numero a utente con prompt

// -creare una costante e il un prompt che chieda un numero 

let numeroUtente

const maxNumeriDispari = 10

let contenitoreNumeriDispari = []
    
while (contenitoreNumeriDispari.length <= 9){

    numeroUtente = parseInt(prompt('Inserisci un numero dispari'))

    if(!isNaN(numeroUtente) && numeroUtente % 2 != 0){

        contenitoreNumeriDispari.push(numeroUtente)
        console.log(contenitoreNumeriDispari)
    }

} 

for(let i = 0; i <= contenitoreNumeriDispari.length - 1; i++){
    console.log(contenitoreNumeriDispari[i])
}






// se il numero è dispari inserirlo in una lista

// se è pari o NaN scartarlo

// la lista deve constenere 10 numeri

// una volta ottenuta la lista, spamparli uno alla volta
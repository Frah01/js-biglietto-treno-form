// INSERISCI IL NOME

const buttongenerate= document.getElementById ('generate');
let second_value_input
generate.addEventListener ('click', function(){

    //INPUT NOME PASSEGGERO

    let input_tag= document.getElementById('nome_utente');
    let value_input= input_tag.value
    console.log(value_input)

    //INPUT KM PERCORSI

    let last_input_tag= document.getElementById('km_percorsi');
    let second_value_input= last_input_tag.value
    console.log (second_value_input)

    //INPUT ETA
    let input_eta= document.getElementById('eta')

    //COSTO BIGLIETTO PREZZO BASE

    let costo_biglietto= second_value_input * 0.21
    console.log(costo_biglietto)

    //CALCOLARE GLI SCONTI
    let minorenne= document.getElementById('minorenne')
    let over= document.getElementById('over')
    let sconto_minorenni= costo_biglietto * 0.8
    let sconto_over= costo_biglietto * 0.6
    const eta = document.getElementById('myselect').value
    console.log(eta)
    

    if (eta===minorenne){
    costo_biglietto= Math.round(sconto_minorenni * 100.0) / 100.0;
    console.log(costo_biglietto)
    
    }

    else if (eta===over){
        costo_biglietto= Math.round(sconto_over * 100.0) / 100.0;
        console.log(costo_biglietto)
    }

    else {
        console.log(costo_biglietto)
    }

    })

// INSERISCI IL NUMERO DI KM DA PERCORRERE

// let km= parseInt(prompt('Inserisci il numero di km da percorrere'));
// console.log(km)

// INSERISCI LA TUA ETA'

// let eta= parseInt(prompt('Inserisci la tua età'));
// console.log(eta)


// CALCOLARE IL PREZZO DEL VIAGGIO




// CALCOLARE GLI SCONTI



// MOSTRO A SCHERMO IL PREZZO DEL BIGLIETTO *BONUS*

// document.getElementById('prezzo_biglietto').innerHTML= ('Il prezzo del biglietto è di' + " " + costo_biglietto + '€')

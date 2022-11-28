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
    

    //CALCOLARE GLI SCONTI
    let sconto_minorenni= costo_biglietto * 0.8
    let sconto_over= costo_biglietto * 0.6
    const eta = document.getElementById('myselect').value
    console.log(eta)

    //NOME PASSEGGERO INNERHTML

    document.getElementById('nome_passeggero').innerHTML= (value_input)
    

    if (eta==='Minorenne'){
        costo_biglietto= Math.round(sconto_minorenni * 100.0) / 100.0;
        console.log(costo_biglietto)
        document.getElementById('prezzo_biglietto').innerHTML= ('Il prezzo del biglietto è di' + " " +costo_biglietto + '€')
    
    }

    else if (eta==='Over 65'){
        costo_biglietto= Math.round(sconto_over * 100.0) / 100.0;
        console.log(costo_biglietto)
        document.getElementById('prezzo_biglietto').innerHTML= ('Il prezzo del biglietto è di' + " " +costo_biglietto + '€')
    }

    else {
        costo_biglietto= Math.round(costo_biglietto * 100.0) / 100.0;
        console.log(costo_biglietto)
        document.getElementById('prezzo_biglietto').innerHTML= ('Il prezzo del biglietto è di' + " " +costo_biglietto + '€')
    }

    })


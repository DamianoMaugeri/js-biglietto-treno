console.log('test')

// acquisizione dei dati

const numeroKm = parseInt(prompt('inserisci il numero di km da percorrere')) // numero

const userAge = parseInt ( prompt('inserisci la tua età')) // numero

console.log(numeroKm, userAge)

const priceForKm = 0.21 // numero


if ( isNaN(numeroKm) || isNaN(userAge) || numeroKm < 0  ){
    console.log('inserisci i dati corretti')
} else {
    let ticketPrice = 0,  // tutti numeri
    discount = 0,
    finalPrice = 0
    
    // calcolo il prezzo del biglietto senza sconto 
    
    ticketPrice = ( numeroKm * priceForKm)
    console.log(ticketPrice)
    
    // quantifico lo sconto in base all'età
    
    if( userAge < 18 ){
        discount = ticketPrice * 0.2
    } else if ( userAge >= 65){
        discount = ticketPrice * 0.4
    }
    
    // calcolo il prezzo finale applicando l'eventua sconto
    
    finalPrice = ticketPrice - discount
    
    console.log(`Prezzo biglietto: €${finalPrice.toFixed(2)}`)

    const formattedPrice = new Intl.NumberFormat( 'it-IT' , {style: 'currency', currency: 'EUR' }).format( finalPrice)
    console.log(`Prezzo biglietto: ${formattedPrice}`)
    
    

}










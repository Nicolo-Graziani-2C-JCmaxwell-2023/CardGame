// settaggio delle carte
card = ["front4.jpg", "front5.jpg", "front.jpg", "front3.jpg", "front.jpg", "front5.jpg", "front2.jpg","front6.jpg", "front3.jpg", "front2.jpg", "front4.jpg", "front6.jpg"]
// set valore delle carte girate
let NTurnCard = 0;
let FristCard = null
table = document.querySelector('#gametable')
let ctht = document.getElementById("ctht");
// set valore del 'conto' 
let ct = 0;
//setting delle varie
card.forEach(element => {
    table.innerHTML += '<img id="' + element + '" src="back.jpg" onclick="gira(this)" />'
    console.log('<img id="' + element + '" back.jpg" />')
});
// settaggio della funzione
function gira(card) {
    // aggiunta delle carte girate
    NTurnCard++
    console.log(NTurnCard)
    card.src = card.id
    if (NTurnCard == 1)
    FristCard = card
    else {
        NTurnCard = 0
        if (card.src == FristCard.src) {
            // aggiunta del punto
            console.log("+1 Point")
            ct++;
            ctht.textContent = ct;
        } else {
            // avviso per l'errore
            console.log("retry")
            // settaggio del timer
            setTimeout(function() {
                card.src = "back.jpg";
                FristCard.src = "back.jpg";
            }, 1500);
        }
    }
    ctht.textContent = ct;
}

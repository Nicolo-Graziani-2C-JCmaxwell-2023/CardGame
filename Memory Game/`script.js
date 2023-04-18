card = ["front4.jpg", "front.jpg", "front3.jpg", "front.jpg", "front2.jpg", "front3.jpg", "front2.jpg", "front4.jpg"]
let NTurnCard = 0;
let FristCard = null
table = document.querySelector('#gametable')
let ctht = document.getElementById("ctht");
let ct = 0;
//setting delle varie
card.forEach(element => {
    table.innerHTML += '<img id="' + element + '" src="back.jpg" onclick="gira(this)" />'
    console.log('<img id="' + element + '" back.jpg" />')
});
function gira(card) {
    NTurnCard++
    console.log(NTurnCard)
    card.src = card.id
    if (NTurnCard == 1)
    FristCard = card
    else {
        NTurnCard = 0
        if (card.src == FristCard.src) {
            console.log("+1 Point") 
            ct++;
            ctht.textContent = ct;
        } else {
            console.log("retry")
            setTimeout(function() {
                card.src = "back.jpg";
                FristCard.src = "back.jpg";
            }, 1500);
        }
    }
    ctht.textContent = ct;
}
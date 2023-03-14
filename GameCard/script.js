let NTurnCard = 0
let FristTurnCard = null
card = ["front4.jpg", "front.jpg", "front3.jpg", "front.jpg", "front3.jpg", "front4.jpg"]
table = document.querySelector('#gametable')

card.forEach(element => {
    table.innerHTML += '<img id="' + element + '" src="back.jpg" onclick="TurnImg(this)" />'
    console.log('<img id="' + element + '" src="back.jpg" />')
});

function TurnImg(card) {
    NTurnCard++
    card.src = card.id
    console.log(NTurnCard)
    if (NTurnCard == 1)
        FristTurnCard = card
    else {
        NTurnCard == 0
        if (card.src == FristTurnCard.src)
            console.log("+1 Point")
        else {
            console.log("...")
            card.src = "back.jpg"
            FristTurnCard.src = "back.jpg"
        }
    }
}         
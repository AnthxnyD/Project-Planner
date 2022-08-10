const card_data = [
    {
        name : "carglaz",
        description : "cezadaz zdazdad",
        timer : "466",
        status : "1"
    },
    {
        name : "olvier",
        description : "cezadaz zdazdad",
        timer : "466",
        status : "1"
    }
]

console.log(card_data.push)

let generateCard = card_data.map(function(){
        let card = document.createElement("div")
        card.classList.add("card")
        let dashboard = document.querySelector(".dashboard")
        dashboard.appendChild(card)
})

const addCard = document.querySelector(".addCard")
addCard.addEventListener("click", function() {
    card_data.push.call()
})
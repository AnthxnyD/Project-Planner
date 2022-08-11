let card_data = [
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
let dashboard = document.querySelector(".dashboard")

generateCard()

function generateCard(){
    dashboard.innerHTML = ""
    card_data.forEach((card) => {
        let cardElem = document.createElement("div")
        cardElem.classList.add("card")
        cardElem.innerHTML = "check test " + card.name
        
        dashboard.appendChild(cardElem)
    })
}

const addCard = document.querySelector(".addCard")
addCard.addEventListener("click", function() {
    console.log("check")
    card_data.push({name: "Joshua"})
    generateCard()
})






// let displayCard = card_data.map(function(){
//         let card = document.createElement("div")
//         card.classList.add("card")
//         let dashboard = document.querySelector(".dashboard")
//         dashboard.appendChild(card)
// })
// function displayCard (){
//     console.log(e)
//     let card = document.createElement("div")
//     card.classList.add("card")
//     card.textContent = ""
//     let dashboard = document.querySelector(".dashboard")
//     dashboard.appendChild(card)
    
// }
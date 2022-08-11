const card_data = [1,2,3,4,5,6,7,8,9,10,11,12]

for (let i = 0; i < card_data.length; i++) {
    let card = document.createElement("div")
    card.classList.add("card")
    let dashboard = document.querySelector(".dashboard")
    dashboard.appendChild(card)
    
}

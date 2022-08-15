let card_data = [
]
let dateArray = []
const status = ["to do", "doing", "done"]
let dashboard = document.querySelector(".dashboard")
let isCardShow = false;
generateCard()

function generateCard() {
    dashboard.innerHTML = ""
    card_data.forEach((card) => {
        let cardElem = document.createElement("div")
        let cardName = document.createElement("h2")
        cardName.classList.add("Entry")
        let cardDescription = document.createElement("p")
        cardDescription.classList.add("Entry")
        let cardDate = document.createElement("p")
        cardDate.classList.add("Entry")
        let cardSelect = document.createElement("select")
        cardSelect.classList.add("Entry")


        cardElem.classList.add("card")
        // cardElem.innerHTML = "Titre " + card.name
        cardName.innerHTML = card.name
        cardDescription.innerHTML = card.description
        cardDate.innerHTML = card.timer
        cardSelect.setAttribute("id", "cardSelect")
        for (let i = 0; i < card.state.length; i++) {
            let optionStatus = document.createElement("option")
            optionStatus.value = card.state[i]
            optionStatus.text = card.state[i]
            cardSelect.appendChild(optionStatus)
        }
        let timerArray = card.timer


        dashboard.appendChild(cardElem)
        cardElem.appendChild(cardName)
        cardElem.appendChild(cardDescription)
        cardElem.appendChild(cardDate)
        cardElem.appendChild(cardSelect)
    })
}

const addCard = document.querySelector(".addCard")
addCard.addEventListener("click", displayCheckbox)

function displayCheckbox() {

    if (isCardShow) {
        return
    }
    isCardShow = true
    let planner = document.querySelector(".planner") // Slection de l'element .planner

    let checkbox = document.createElement("section") // Création de section
    let validation = document.createElement("button") // Création d'un button
    let inputName = document.createElement("input") // Création d'un input field
    let inputDescription = document.createElement("input")
    let inputDate = document.createElement("input")



    const name = document.createElement("div")
    name.innerHTML = "Name :"
    const description = document.createElement("div")
    description.innerHTML = "Description :"
    const date = document.createElement("div")
    date.innerHTML = "Date d'échéance :"

    checkbox.classList.add("checkbox") // Ajoute a checkbox
    inputName.setAttribute("type", "text") // Ajoute un attribut type a l'input field
    inputDescription.setAttribute("type", "text")
    inputDate.setAttribute("type", "date")
    validation.innerHTML = "valider" // Ajouter du texte au button

    validation.addEventListener("click", function () { // Ajoute au button un event on click
        let newName = inputName.value
        let newDescription = inputDescription.value
        let newDate = inputDate.valueAsNumber
        let actualDate = new Date().getTime();
        let resultInJ = Math.floor((newDate - actualDate) / 86400000);
        dateArray.push(resultInJ)
        card_data.push({
            name: newName,
            description: newDescription,
            timer: resultInJ,
            state: ["to do", "doing", "done"]
        }) // Insère dans l'array un nouvelle objet
        generateCard() // lance la fonction generate card
        planner.removeChild(checkbox) // supprime l'enfant checkbox
        console.log(dateArray)
        isCardShow = false
    })

    planner.insertBefore(checkbox, dashboard) // Ajoute dans le dom l'elem checkbox
    checkbox.appendChild(name)
    checkbox.appendChild(inputName) // Ajoute dans le dom l'elem inputName
    checkbox.appendChild(description)
    checkbox.appendChild(inputDescription)
    checkbox.appendChild(date)
    checkbox.appendChild(inputDate)
    checkbox.appendChild(validation) // Ajoute dans le dom l'elem validation
}
//NAME FILTER
let nameFilter = document.querySelector(".nameFilter")
nameFilter.addEventListener("click", function () {

    dashboard.innerHTML = ""
    //console.log(card_data.sort((a, b) => a.name.localeCompare(b.name)))
    let arrayName = card_data.sort((a, b) => a.name.localeCompare(b.name))

    card_data = arrayName
    console.log(arrayName)
    generateCard()

})




// TIME FILTER
let timeFilter = document.querySelector(".timeFilter")
timeFilter.addEventListener("click", function () {
    dashboard.innerHTML = ""
    let arrayTime = card_data.sort(({ timer: a }, { timer: b }) => a - b)
    card_data = arrayTime
    generateCard()
})
//Status FILTER

let statusFilter = document.querySelector(".statusFilter")
statusFilter.addEventListener("click", function () {
    dashboard.innerHTML = ""
    let arrayStatus = card_data.sort()
    card_data = arrayStatus
    generateCard()

})




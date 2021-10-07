//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let entry = count + " - "
    console.log(count)
    saveEl.textContent += entry
    countEl.textContent = 0
    count = 0
}

// let name = "Tiara"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// console.log(myGreeting)
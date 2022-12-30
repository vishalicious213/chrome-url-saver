const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let savedInputs = []

inputBtn.addEventListener("click", function() {
    savedInputs.push(inputEl.value)
    console.log(savedInputs)
})
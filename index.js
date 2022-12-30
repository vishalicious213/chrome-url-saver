const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const savedInputsEl = document.getElementById("saved-inputs-el")
let savedInputs = []

inputBtn.addEventListener("click", function() {
    savedInputs.push(inputEl.value)
    showSavedInputs()
    inputEl.value = "" // clear input field after text is saved
})

function showSavedInputs() {
    let savedInputsList = ""
    for (let i = 0; i < savedInputs.length; i++) {
        savedInputsList += `<li><a href="https://${savedInputs[i]}" target="_blank">${savedInputs[i]}</a></li>`
        // THIS IS HOW TO DO THE ABOVE USING JAVASCRIPT:
        // const li = document.createElement("li") // create element
        // li.textContent = savedInputs[i] // set text content
        // savedInputsEl.append(li) // append to ul
    }
    savedInputsEl.innerHTML = savedInputsList
}

showSavedInputs()
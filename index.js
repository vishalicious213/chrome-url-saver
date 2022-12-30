const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const savedInputsEl = document.getElementById("saved-inputs-el")
let savedInputs = ["www.url1.com", "www.url2.com", "www.url3.com"]

inputBtn.addEventListener("click", function() {
    savedInputs.push(inputEl.value)
})

function showSavedInputs() {
    for (let i = 0; i < savedInputs.length; i++) {
        savedInputsEl.innerHTML += `<li>${savedInputs[i]}</li>`
        // THIS IS HOW TO DO THE ABOVE USING JAVASCRIPT:
        // const li = document.createElement("li")
        // li.textContent = savedInputs[i]
        // savedInputsEl.append(li)
    }
}

showSavedInputs()
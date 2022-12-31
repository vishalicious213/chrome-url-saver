const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const deleteBtn = document.getElementById("delete-btn")
const savedInputsEl = document.getElementById("saved-inputs-el")
let savedInputs = []
const urlsFromLocalStorage = JSON.parse(localStorage.getItem("saved-urls"))

// function to add URL to array and save to localStorage
inputBtn.addEventListener("click", function() {
    savedInputs.push(inputEl.value)
    showSavedInputs()
    inputEl.value = "" // clear input field after text is saved
    localStorage.setItem("saved-urls", JSON.stringify(savedInputs)) // save URL to localStorage
})

// function to remove all URLs from localStorage, array and onscreen
deleteBtn.addEventListener("click", function() {
    localStorage.clear() // remove URLs from localStorage
    savedInputs = [] // set savedInputs to empty array
    showSavedInputs() // render empty array
})

// function to display saved URLs
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

// if any URLs were saved, render them when application is launched
if (urlsFromLocalStorage) {
    savedInputs = urlsFromLocalStorage
    showSavedInputs()
}

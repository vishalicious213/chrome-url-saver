const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let savedInputs = ["www.url1.com", "www.url2.com", "www.url3.com"]

inputBtn.addEventListener("click", function() {
    savedInputs.push(inputEl.value)
    // console.log(savedInputs)
    showSavedInputs()
})

function showSavedInputs() {
    for (let i = 0; i < savedInputs.length; i++) {
        console.log(savedInputs[i])
    }
}
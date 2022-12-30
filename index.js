const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let savedInputs = []

inputBtn.addEventListener("click", function() {
    savedInputs.push("https://vish213-portfolio-v3.netlify.com/")
    console.log(savedInputs)
})
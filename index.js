/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-btn")
let lengthEl = document.getElementById("length-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
})

let volumeEl = document.getElementById("volume-el")

convertBtn.addEventListener("click", function(){
    let volumValue = inputEl.value
    volumeEl.textContent = `${volumValue} liter = ${volumValue * literToGallon } gallon`
})

let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let massValue = inputEl.value
    massEl.textContent = `${massValue} kilo = ${massValue * kilogramToPound} pound`
})

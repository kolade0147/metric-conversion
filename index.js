/* let input = ""
let response = "" */
let numEl = document.getElementById("num-el")
let btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


btnEl.addEventListener("click", function() {
   let meters = (numEl.value = 0.3045).toFixed(3)
     let feet = (numEl.value = 3.280839895).toFixed(3)
     let liter = (numEl.value = 0.3048).toFixed(3)
     let gallons = (numEl.value = 0.3048).toFixed(3)
     let kilos = (numEl.value = 0.3048).toFixed(3)
     let pounds = (numEl.value = 0.3048).toFixed(3) 
   
     lengthEl.textContext = `${ numEl.value} meters = ${feet} feet | ${numEl.value} feet = ${meter}meter`
   
     volumeEl.textContext = `${ numEl.value} gallons = ${feet} feet | ${numEl.value} gallons = ${kilos}kilos`
   
     massEl.textContext = `${ numEl.value} meters = ${feet} feet | ${numEl.value} feet = ${pounds}pounds`
   	console.log(length.innerHTML)
   })

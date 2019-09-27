 // First example
 const paragraph = document.querySelector('#sample-1')
 var cars = ["Audi", "BMW", "Mercedes", "Volvo"]
 cars.forEach(displayCars)

 function displayCars(item, index) {
     paragraph.innerHTML += index + ": " + item + "<br>"
 }

 // Second example
 const links = document.querySelectorAll('.ForEachSample a')
 
 function changeToBlack() {
     links.forEach((links) => {
         links.style.color = "black";
     })
 }

 links.forEach((links, index) => {
     links.addEventListener('click', function() {
         console.log("this: " + this)
         console.log("index: " + index)
         changeToBlack()
         this.style.color = "blue"
     })
 })



const box = [
  { id: 0, value: "Mohamed" },
  { id: 1, value: "Piano player" },
  { id: 2, value: "Salwa" },
  { id: 3, value: "Sewing" },
  { id: 4, value: "John" },
  { id: 5, value: "Drums player" },
  { id: 6, value: "Samia" },
  { id: 7, value: "Dancer" },
  { id: 8, value: "Ahmed" },
  { id: 9, value: "Photography" },
  { id: 10, value: "Sara" },
  { id: 11, value: "Painting" },
  { id: 12, value: "Omar" },
  { id: 13, value: "Swimming" },
  { id: 14, value: "Mariam" },
  { id: 15, value: "Cooking" },
  { id: 16, value: "Youssef" },
  { id: 17, value: "Football" },
  { id: 18, value: "Nour" },
  { id: 19, value: "Reading" },
  { id: 20, value: "Adam" },
  { id: 21, value: "Guitar player" },
  { id: 22, value: "Lina" },
  { id: 23, value: "Drawing" },
  { id: 24, value: "Karim" },
  { id: 25, value: "Chess" },
  { id: 26, value: "Hana" },
  { id: 27, value: "Gardening" },
  { id: 28, value: "Daniel" },
  { id: 29, value: "Cycling" },
  { id: 30, value: "Mona" },
  { id: 31, value: "Baking" },
  { id: 32, value: "Ali" },
  { id: 33, value: "Fishing" },
  { id: 34, value: "Layla" },
  { id: 35, value: "Singing" },
  { id: 36, value: "Tarek" },
  { id: 37, value: "Running" },
  { id: 38, value: "Yara" },
  { id: 39, value: "Knitting" },
  { id: 40, value: "Hassan" },
  { id: 41, value: "Traveling" },
  { id: 42, value: "Dina" },
  { id: 43, value: "Horse Riding" },
  { id: 44, value: "Michael" },
  { id: 45, value: "Video Games" },
  { id: 46, value: "Aya" },
  { id: 47, value: "Yoga" },
  { id: 48, value: "Khaled" },
  { id: 49, value: "Basketball" },
  { id: 50, value: "Reem" },
  { id: 51, value: "Calligraphy" },
  { id: 52, value: "David" },
  { id: 53, value: "Running" },
  { id: 54, value: "Huda" },
  { id: 55, value: "Pottery" },
  { id: 56, value: "Mostafa" },
  { id: 57, value: "Archery" },
  { id: 58, value: "Salma" },
  { id: 59, value: "Origami" },
  { id: 60, value: "George" },
  { id: 61, value: "Skateboarding" },
  { id: 62, value: "Farah" },
  { id: 63, value: "Writing" },
  { id: 64, value: "Ibrahim" },
  { id: 65, value: "Table Tennis" },
  { id: 66, value: "Jana" },
  { id: 67, value: "Volleyball" },
  { id: 68, value: "Mahmoud" },
  { id: 69, value: "Model Building" },
  { id: 70, value: "Rania" },
  { id: 71, value: "Dancing" },
  { id: 72, value: "Ethan" },
  { id: 73, value: "Surfing" },
  { id: 74, value: "Nada" },
  { id: 75, value: "Crocheting" },
  { id: 76, value: "Wael" },
  { id: 77, value: "Basketball" },
  { id: 78, value: "Amira" },
  { id: 79, value: "Playing Violin" },
  { id: 80, value: "Ziad" },
  { id: 81, value: "Hiking" },
  { id: 82, value: "Esraa" },
  { id: 83, value: "Jewelry Making" },
  { id: 84, value: "Omar" },
  { id: 85, value: "Cooking" },
  { id: 86, value: "Mai" },
  { id: 87, value: "Reading" },
  { id: 88, value: "Sherif" },
  { id: 89, value: "Football" },
  { id: 90, value: "Aya" },
  { id: 91, value: "Photography" },
  { id: 92, value: "Ramy" },
  { id: 93, value: "Guitar Player" },
  { id: 94, value: "Nadia" },
  { id: 95, value: "Painting" },
  { id: 96, value: "Yassin" },
  { id: 97, value: "Swimming" },
  { id: 98, value: "Maya" },
  { id: 99, value: "Chess" }
];

let section = document.querySelector("#section");
let index=document.getElementById("index")
let print=document.getElementById("print")
let result=document.getElementById("result")

window.addEventListener("DOMContentLoaded", function () {
  displayBoxes(box);
});
index.addEventListener('keydown',(event)=>{
   if (event.key === 'Enter') {
        event.preventDefault(); 
        if (index.value==27){
          print.innerText=`${box[27].value}`
          result.innerText="Great job ...Wasn't Easy Right ?!!"
          result.style.color='rgb(37, 211, 102)'
          next.style.display='flex'
        }
        else{
          result.innerText=`Nope Try Again`
          result.style.color='red'
        }
    }
})

function displayBoxes(box) {
  let boxes = box.map(function (item) {
    return `<div class="list-item">${item.id}</div>`;
  });

  section.innerHTML = boxes.join("");

  
  let Boxes = document.querySelectorAll(".list-item");

  Boxes.forEach(function (element, index) {
    element.addEventListener("click", function () {
      let item = box[index];

      if (element.innerText == item.id) {
        element.innerText = item.value;
      } else {
        element.innerText = item.id;
      }
    });
  });
}



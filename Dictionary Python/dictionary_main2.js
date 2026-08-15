const box = [
  { id: "Mohamed", value: "Piano player" },
  { id: "Salwa", value: "Sewing" },
  { id: "John", value: "Drums player" },
  { id: "Samia", value: "Dancer" },
  { id: "Ahmed", value: "Photography" },
  { id: "Sara", value: "Painting" },
  { id: "Omar", value: "Swimming" },
  { id: "Mariam", value: "Cooking" },
  { id: "Youssef", value: "Football" },
  { id: "Nour", value: "Reading" },
  { id: "Adam", value: "Guitar player" },
  { id: "Lina", value: "Drawing" },
  { id: "Karim", value: "Chess" },
  { id: "Hana", value: "Gardening" },
  { id: "Daniel", value: "Cycling" },
  { id: "Mona", value: "Baking" },
  { id: "Ali", value: "Fishing" },
  { id: "Layla", value: "Singing" },
  { id: "Tarek", value: "Running" },
  { id: "Yara", value: "Knitting" },
  { id: "Hassan", value: "Traveling" },
  { id: "Dina", value: "Horse Riding" },
  { id: "Michael", value: "Video Games" },
  { id: "Aya", value: "Yoga" },
  { id: "Khaled", value: "Basketball" },
  { id: "Reem", value: "Calligraphy" },
  { id: "David", value: "Running" },
  { id: "Huda", value: "Pottery" },
  { id: "Mostafa", value: "Archery" },
  { id: "Salma", value: "Origami" },
  { id: "George", value: "Skateboarding" },
  { id: "Farah", value: "Writing" },
  { id: "Ibrahim", value: "Table Tennis" },
  { id: "Jana", value: "Volleyball" },
  { id: "Mahmoud", value: "Model Building" },
  { id: "Rania", value: "Dancing" },
  { id: "Ethan", value: "Surfing" },
  { id: "Nada", value: "Crocheting" },
  { id: "Wael", value: "Basketball" },
  { id: "Amira", value: "Playing Violin" },
  { id: "Ziad", value: "Hiking" },
  { id: "Esraa", value: "Jewelry Making" },
  { id: "Omar", value: "Cooking" },
  { id: "Mai", value: "Reading" },
  { id: "Sherif", value: "Football" },
  { id: "Nadia", value: "Photography" },
  { id: "Ramy", value: "Guitar Player" },
  { id: "Yassin", value: "Swimming" },
  { id: "Maya", value: "Chess" }
];

let section = document.querySelector("#section");
let key=document.getElementById("key")
let print=document.getElementById("print")
let result=document.getElementById("result")
let next=document.getElementById("next")

window.addEventListener("DOMContentLoaded", function () {
  displayBoxes(box);
});
key.addEventListener('keydown',(event)=>{
   if (event.key === 'Enter') {
        event.preventDefault(); 
        if (key.value=="Tarek"){
          print.innerText=`${box[18].value}`
          result.innerText='Great job Still Super Easy Right ?!!'
          result.style.color='rgb(37, 211, 102)'
          next.style.display='flex'
        }
        else{
          result.innerText=`Nope Try Again`
          result.style.color='red'
        }
    }
})
next.addEventListener('click',()=>{
  window.location.href = "dictionary_nextLevel.html";
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
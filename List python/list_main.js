const box = [
  { id: 0, value: "Mohamed" },
  { id: 1, value: "Piano player" },
  { id: 2, value: "Salwa" },
  { id: 3, value: "Sewing" },
  { id: 4, value: "John" },
  { id: 5, value: "Drums player" },
  { id: 6, value: "Samia" },
  { id: 7, value: "Dancer" },
];

let section = document.querySelector("#section");
let index=document.getElementById("index")
let print=document.getElementById("print")
let result=document.getElementById("result")
let next=document.getElementById("next")

window.addEventListener("DOMContentLoaded", function () {
  displayBoxes(box);
});
index.addEventListener('keydown',(event)=>{
   if (event.key === 'Enter') {
        event.preventDefault(); 
        if (index.value==1){
          print.innerText=`${box[1].value}`
          result.innerText='Great job Super Easy Right ?!!'
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
  window.location.href = "list_nextLevel.html";
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



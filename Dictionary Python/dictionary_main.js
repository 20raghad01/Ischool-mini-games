const box = [
  { id: "Mohamed" , value:"Piano player" },
  { id: "Salwa" , value:"Sewing"  },
  { id: "John", value: "Drums player"},
  { id: "Samia", value: "Dancer" }
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
        if (key.value=="Mohamed"){
          print.innerText=`${box[0].value}`
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
  window.location.href = "next.html";
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



const answer1=document.getElementById("p21");
const answer2=document.getElementById("p22");
const answer3=document.getElementById("p23");
const answer4=document.getElementById("p24");
const answer5=document.getElementById("p25");
const answer6=document.querySelector(".third-line");
document.querySelectorAll(".wrong").forEach((element) => {
    element.addEventListener("click", () => {
        element.style.backgroundColor = "#ffb3ba";
    });
});
document.querySelectorAll(".correct").forEach((element) => {
    element.addEventListener("click", () => {
        element.style.display = "none";
    });
});
document.getElementById("correct21").addEventListener("click",()=>{
    answer1.innerText="if";
    answer1.style.backgroundColor ="#f0f9ff";
    answer1.style.color="rgb(37, 211, 102)"
    answer1.style.width="fit-content"
})
document.getElementById("correct22").addEventListener("click",()=>{
    answer2.innerText="weather";
    answer2.style.backgroundColor ="#f0f9ff";
    answer2.style.color="rgb(37, 211, 102)"
    answer2.style.width="fit-content"
})
document.getElementById("correct23").addEventListener("click",()=>{
    answer3.innerText="==";
    answer3.style.backgroundColor ="#f0f9ff";
    answer3.style.color="rgb(37, 211, 102)"
    answer3.style.width="fit-content"
})
document.getElementById("correct24").addEventListener("click",()=>{
    answer4.innerText="'cold'";
    answer4.style.backgroundColor ="#f0f9ff";
    answer4.style.color="rgb(37, 211, 102)"
    answer4.style.width="fit-content"
})
document.getElementById("correct25").addEventListener("click",()=>{
    answer5.innerText=":";
    answer5.style.backgroundColor ="#f0f9ff";
    answer5.style.color="rgb(37, 211, 102)"
    answer5.style.width="fit-content"
})
document.getElementById("correct26").addEventListener("click",()=>{
    answer6.innerText="print('Wear a jacket')";
    answer6.style.backgroundColor ="#f0f9ff";
    answer6.style.color="rgb(37, 211, 102)"
    answer6.style.width="fit-content"
})

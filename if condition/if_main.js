const answer1=document.getElementById("p1");
const answer2=document.getElementById("p2");
const answer3=document.getElementById("p3");
const answer4=document.getElementById("p4");
const answer5=document.getElementById("p5");
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
document.getElementById("correct1").addEventListener("click",()=>{
    answer1.innerText="if";
    answer1.style.backgroundColor ="#f0f9ff";
    answer1.style.color="rgb(37, 211, 102)"
    answer1.style.width="fit-content"
})
document.getElementById("correct2").addEventListener("click",()=>{
    answer2.innerText="age";
    answer2.style.backgroundColor ="#f0f9ff";
    answer2.style.color="rgb(37, 211, 102)"
    answer2.style.width="fit-content"
})
document.getElementById("correct3").addEventListener("click",()=>{
    answer3.innerText="<";
    answer3.style.backgroundColor ="#f0f9ff";
    answer3.style.color="rgb(37, 211, 102)"
    answer3.style.width="fit-content"
})
document.getElementById("correct4").addEventListener("click",()=>{
    answer4.innerText="18";
    answer4.style.backgroundColor ="#f0f9ff";
    answer4.style.color="rgb(37, 211, 102)"
    answer4.style.width="fit-content"
})
document.getElementById("correct5").addEventListener("click",()=>{
    answer5.innerText=":";
    answer5.style.backgroundColor ="#f0f9ff";
    answer5.style.color="rgb(37, 211, 102)"
    answer5.style.width="fit-content"
})
document.getElementById("correct6").addEventListener("click",()=>{
    answer6.innerText="print('no driver liscense for you')";
    answer6.style.backgroundColor ="#f0f9ff";
    answer6.style.color="rgb(37, 211, 102)"
    answer6.style.width="fit-content"
})
document.getElementById("next-level").addEventListener("click",()=>{
    window.location.href = "if_nextLevel.html";
})
// const firstEl=document.getElementById("iden");
//const firstEl=document.getElementsByClassName("class")[0];
const firstEl = document.querySelector("div");
// firstEl.innerText= "I am here!";
firstEl.innerHTML="I`m <strong>here</strong>!";
firstEl.classList.add("added");
console.log(firstEl);
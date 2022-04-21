"use strict";
let el = document.createElement("INPUT");
el.setAttribute("type", "text")
el.setAttribute("class","search")
el.setAttribute("placeholder","Enter thirukural number")
document.body.append(el);



let btn = document.createElement("button");
btn.setAttribute("class","btn btn-primary");
btn.innerText = "OK";
document.body.append(btn);
btn.addEventListener("click",myFunction)

function myFunction(){
let num = el.value;
let container = document.createElement("div");
container.setAttribute("class","box");
document.body.append(container);
if (num>=1 && num<=1330){
 fetch (`https://api-thirukkural.vercel.app/api?num=${num}`)
.then (data => data.json())
.then(data => {container.innerHTML = `
number:${data.number}<br>
section:${data.sect_tam}<br>
Chapter:${data.chap_tam}<br>
Kural:${data.line1}<br>
${data.line2}<br>
Tamil explaination: ${data.tam_exp}<br>
Section English: ${data.sect_eng}<br>
Chapter English :${data.chapgrp_eng}<br>
${data.chap_eng}<br>
kural:${data.eng}<br>
English Explaination:${data.eng_exp}
`
})
.catch((error) => {console.log(error)})
}
else{
    alert("please enter from 1 to 1330")
}
}
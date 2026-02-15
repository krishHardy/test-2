// eco score calculator logic

// first accessing html required html elements in js
let bottle= document.querySelector("#answer-1");
let bag= document.querySelector("#answer-2");

//building logic how claculator should work
let calculatorLogic=()=>{
let ecoScore= Number(bottle.value) + Number(bag.value);//here we take out the value inside the html element that we access and then did type conversion to number
let finalEcoScore=0;

if(ecoScore>= 150){
    finalEcoScore=0;
}else if(ecoScore<150 && ecoScore>=100){
    finalEcoScore=25;
}else if(ecoScore<100 && ecoScore>=75){
    finalEcoScore=50;
}else if(ecoScore<75 && ecoScore>=35){
    finalEcoScore=75;
}else if(ecoScore<35 && ecoScore>=0){
    finalEcoScore=100;
}

let score=document.createElement("p");// creating a new html paragraph element from JS 
let resultDiv=document.querySelector(".result");

// putting value in p element which is create through js
score.innerText=`${finalEcoScore} out of 100`;
// giving styling through CSS properties in JS
score.style.display="inline-block";
score.style.backgroundColor=" rgb(173, 233, 178)";
score.style.fontWeight="bold";

//implementating text in html element 
resultDiv.innerHTML= "<h2>Your eco score is : </h2>"
resultDiv.append(score);// adding paragraph elemnt in html file at the end of result div
}

let btm=document.querySelector("#calculateButton");
btm.addEventListener("click",calculatorLogic);//onclick event handaling
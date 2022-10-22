let randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber2);

let randomNumber1s = "dice" + randomNumber1 + ".png";
let randomNumber2s = "dice" + randomNumber2 + ".png";

let a = document.querySelectorAll("img")[0];
a.setAttribute("src",randomNumber1s);

let b = document.querySelectorAll("img")[1];
b.setAttribute("src",randomNumber2s);

if(randomNumber1>randomNumber2){
    document.querySelector("#h").textContent = "Player 1 Win";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("#h").textContent = "Player 2 Win";
}
else{
    document.querySelector("#h").textContent = "Tie";
}

//1
const h1 = document.getElementsByTagName("h1");
console.log(h1);
const p = document.getElementsByTagName("p");
console.log(p);
const a = document.getElementsByTagName("a");
console.log(a);
const img = document.getElementsByTagName("img");
console.log(img);
const divX = document.getElementsByClassName("x");
console.log(divX);
const divY = document.getElementById("y");
console.log(divY);
const inputs = document.getElementsByTagName("input");
console.log(inputs);

//2
const h1Query = document.querySelector("h1");
console.log(h1);
const pQuery = document.querySelector("p");
console.log(p);
const aQuery = document.querySelector("a");
console.log(a);
const imgQuery = document.querySelector("img");
console.log(imgQuery);
const xQuery = document.querySelector(".x");
console.log(xQuery);
const yQuery = document.querySelector("#y");
console.log(yQuery);
const inputsQuery = document.querySelectorAll("input");
console.log(inputsQuery);

//3
console.log("with getElementsByTagName");
for (let input of inputs) {
  console.log(input);
}
console.log("with querySelectorAll");
for (let input of inputsQuery) {
  console.log(input);
}

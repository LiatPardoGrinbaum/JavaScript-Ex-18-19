//Use traverse methods to complete these tasks:

const myList = document.querySelector("li.start-here");
console.dir(myList);

//1
// myList.innerHTML = "main title";
// innerHTML is les good because of security
myList.textContent = "main title";

//2
const li3 = myList.nextElementSibling;

const myListSiblingChild_ul = li3.firstElementChild; //it's the ul

const newSubTitle = document.createElement("li");

const textList = document.createTextNode("sub title 4"); //or with textcontent

newSubTitle.appendChild(textList);

myListSiblingChild_ul.appendChild(newSubTitle);

//3
// const lastLi = li3.nextElementSibling;
// lastLi.remove();

// console.dir(myListSiblingChild_ul);

//***another solution***:
const parent = myList.parentElement;
parent.lastElementChild.remove();

//4

const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = "Master Of the DOM";
console.dir(title);

//5
const p = parent.nextElementSibling.firstElementChild;
p.textContent = "Have a good day!";

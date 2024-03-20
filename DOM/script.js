// let heading=document.getElementById("heading");
// console.dir(heading);

// let headings=document.getElementsByClassName("heading");
// console.dir(headings);

// let headings=document.getElementsByTagName("p");
// console.dir(headings);

//query selector
// let first=document.querySelector(".heading");
// console.dir(first);
// let forall=document.querySelectorAll(".heading");
// console.dir(forall);

//properties
// let div=document.querySelector("div");
// console.dir(div.textContent);
// let div=document.querySelector("div");
// console.dir(div.innerHTML);
// let div=document.querySelector("div");
// console.dir(div.tabIndex);
// let div=document.querySelector("div");
// console.dir(div.tagName);

//practice
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"from apna college students"
// let divs=document.querySelectorAll(".box");
// console.log(divs);
// div[0].innerText="new unique"; for unique value
// for(div of divs){
//     div.innerText=`new value unique ${idx}`;
//     idx++;
// }



//DOMS PART 2
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// let name=document.querySelector("name");
// console.log(name);

//styling
// let div=document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.style.backgroundColor = "yellow";
// div.style.backgroundColor = "green";
// div.innerText="helloooooooooooooo";
// div.style.visibility="hidden";
// div.innerText="helloooooooooooooo";


//insert elements
//creating new element
// let newelement=document.createElement("h1"); //for creating element
// newelement.innerText="Heyp Me!";
// console.log(newelement);

// let div=document.querySelector("div");
// div.append(newelement); //adding element at the last
// div.prepend(newelement); //" " " "       at the beginning of node
// div.before(newelement); //before the node/outside the div
// div.after(newelement);//after the node
// div.appendChild(newelement);
// div.append(newelement);

// //deleting node
// div.remove;
// newelement.style.backgroundColor="blue";


//PRACTICE QUES:-
let newelement=document.createElement("button");
newelement.innerText="Click me!";
console.log(newelement);
let div=document.querySelector("div");
console.log(div);
div.prepend(newelement);
console.log(div);

//practice2
let p=document.querySelector("p");
console.log(p);
p.style.backgroundColor="blue";
p.style.color="white";

p.append(newclass);
console.log(p)




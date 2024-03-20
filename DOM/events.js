//Event objects 
// let button=document.querySelector("button");
// button.onclick=(evt)=>{
//     console.log('u clicked it');
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// let div=document.querySelector("div");
// button.onmouseover=(evt)=>{
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX,evt.clientY);
// };

//Event listeners
// let button=document.querySelector("button");
// button.addEventListener("click",()=>{ //arrow function
//     console.log('u clicked it once handler 1');
    
// });
// button.addEventListener("click",(evt)=>{ //arrow function
//     console.log('handler 2');
    
// });
// const handler3=()=>{
//     console.log('handler 3');
// };
// button.addEventListener("click",handler3);
// button.addEventListener("click",()=>{ //arrow function
    
//     console.log('handler 3');
// });

// //to remove event listeners
// button.removeEventListener("click",handler3);

//PRACTICE Q
let modebutton=document.querySelector("button");
let currmode="light"; //dark
modebutton.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        //document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").classList.add("dark");
    }else{
    currmode="light";
    //document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").classList.add("light");;
    }
    console.log(currmode);
});


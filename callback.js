// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(10,11,(a,b)=>{
//     console.log(a+b);
// });

//CALLBACK HELL
function getData(dataId){
    setTimeout(()=>{
        console.log("data=",dataId);
    },3000); 
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
})
// getData(1);
// giveData(0);
// getData(2);
// giveData(1);
// getData(3);
// giveData(2);
// getData(4);
// giveData(3);


//PROMISE
// let Promise=new Promise((resolve, reject) => {
//     confirm.log("I am a promise");
// })
// function getData(dataId,getNextdata){
//     return new Promise((resolve, reject) => {
        
//     setTimeout(()=>{
//         console.log("data=",dataId);
//         resolve("success");
    
//     if(getNextdata){
//         getNextdata();
//     }
// },5000);
// })
// }

// getData(1,()=>{       
//         getData(3)
//     });

// function asyncFunc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// } 
// console.log("fetching data1");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
// })

//ASYNC AWAITS
// function api(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Weather data",dataId);
//             resolve("success");
//         },2000);
//     });
// }

// async function getWeatherdata(){
//     await api(1);
//     await api(2);
//     await api(3);
// }


//IIFE
function api(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Weather data",dataId);
            resolve("success");
        },2000);
    });
}
(async function getWeatherdata(){
    await api(1);
    await api(2);
    await api(3);
})();
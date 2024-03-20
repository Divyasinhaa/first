// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let res=sum(13,19);//32
// console.log(res);

//arrow function
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }

//practice 1
// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==='a' || char==='i' || char==='o' || char==='e' || char==='u'){
//             count++;  
//         }  
//     }
//     console.log(count);
// }
//function using arrow func.
// const countVowels=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==='a' || char==='i' || char==='o' || char==='e' || char==='u'){
//             count++;  
//         }  
//     }
//     console.log(count);
// }

//foreach loop in ARRAY
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.forEach(function printVal(val){
//     console.log(val.toUpperCase());
// });

//practice
// let arr=[1020397346548392,2763473782738343,7647637467823924,367376473473453,6272,763846,];

// let square=(val)=>{
//     console.log(val*val);
// };
// arr.forEach(square);

//more array methods
//map method
// let nums=[12,14,9];
// let newArr=nums.map((val)=>{
//     return val%2 === 0;
// });
// console.log(newArr);

//filter method
// let nums=[12,14,9];
// let newArr=nums.filter((val)=>{
//     return val%2 === 0;
// });
// console.log(newArr);

//reduce method
// let arr=[1,2,3,4,5,6,7,8,900,10];
// const output=arr.reduce((prev,next)=>{
//     return prev>next?prev:next;
// });
// console.log(output);

//practice2
// let marks=[90,80,70,60,95];
// let newArr=marks.filter((val)=>{
//     return val>=90;
// });
// console.log(newArr);

//practice q2
// let n=prompt("Input a number");
// let arr=[2,4,6,8,10,12,14];
// const sum=arr.reduce((prev,next)=>{
//     return prev+next;
// })
// console.log(sum);
let n=prompt("Input a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
const sum=arr.reduce((prev,next)=>{
    return prev*next;
})
console.log(sum);
console.log(arr);



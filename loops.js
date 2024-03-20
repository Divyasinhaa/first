// for(let i=1;i<=5;i++){
//     console.log("idiot");
// }

// sum of first n numbers(1-n)

// let n=prompt("enter value of n");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// let i=1
// let n=prompt("enter n");
// while(i<=n){
//     console.log(i);
//     i++;
// }

// let i=5;
// do{
//     console.log("hello hello");
//     i++;
// }while(i<=10);


//for-of loop
// let str="DIVYAASINHA";
// let size=0;
// for(let i of str){ //iterator -> characters
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);

//for-in loop
// let student={
//     name:"Divya Sinha",
//     age:20,
//     cgpa:8.9,
//     isPass:true,
// };
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//practice
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("i=",i);
//     }
// }

//practice2
const gamenum=6;
let n=prompt("Guess the number:");
while(n!=gamenum){
    n=prompt("Guess the number:");
}
console.log("correct number");
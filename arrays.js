let names=["aarti","nalini","jyoti","divya"];
// console.log(names);
// console.log(typeof names);
// console.log(names[0]);
// names[2]="nanlini";
// console.log(names);

//looping over an Array
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }
// for(let name of names){
//     console.log(name);
// }

//practice 1
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log("The avg marks of the class is=",avg);

// //practice 2
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let discount=items[i]/10;
//     items[i]=items[i]-discount;
// }
// console.log(items);

//array methods
// let items=[1,2,3,4,5,6,7];
// items.push(500);
// console.log(items);
// items.pop(500);
// console.log(items);
// console.log(items.toString());
// //unshift=add to start
// console.log(items.unshift(76));
// console.log(items);
// console.log(items.shift());
// console.log(items.slice(1,3));
// items.splice(0,3,101,102);
// console.log(items);
// items.splice(3,1); //only deleting the element
// console.log(items);

//practice
let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr.shift());
arr.splice(1,1,"Ola");
console.log(arr);
arr.splice(5,0,"Amazon");
console.log(arr);

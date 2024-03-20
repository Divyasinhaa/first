// // //inheritance
// // class parent{
// //     hello(){
// //         console.log("hello");
// //     }
// // };
// // class child extends parent{
    
// // };
// // let obj=new child();
// // let obj2=new child();
// // let obj3=new child();

// class person{
//     constructor(name){
//         this.species="homo sapiens";
//         this.name=name;
//     }        
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class engineer extends person{
//     constructor(name){
//         console.log("enter child constructor");
//         super(name); //to invoke parent class constructor
//         this.name=name;
//         console.log("exit child constructor");
//     }
//     work(){
//         super.eat();
//         console.log("solve problems");
//     }
// } 
// let me=new engineer("Divya Sinha");
// let me2=new engineer


//PRACTICE
// let Data="Secret Information";

// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
//         console.log("data=",Data);
//     }
// }

// let student1=new user("Divya Sinha","divyasinha633@gmail.com");
// let student2=new user("Nalini Sinha","nalinisinha96@gmail.com");

// // class admin extends user{
    
// // }

// let data="Class strenght";

// class student{
//     constructor(name,rollno){
//         this.name=name;
//         this.rollno=rollno;
//     }
// }

// class teacher extends student{

// }

// let student1=new student("divya",41522023);
// let student2=new student("Varun",41422060);

//PRACTICE QUES
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewdata(){
//         console.log("data=",data);
//     }
// }

// class admin extends user{
//     editData(){
//         console.log("make changes");
//     }
// }

console.log("one");
console.log("two");
console.log("three");
function hello(){
    console.log("hello princess");
}
setTimeout(hello,10000); //3sec=3000ms
console.log("four");
console.log("five");
// const student={
//     fullname:"Aarti Sinha",
//     marks:94.5,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     },
// };

// const employee={
//     caclTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const Divya={
//     salary:5000,
//     fullname:"Divya Sinha",
// };
// Divya.__proto__=student; //inheriting properties from student to divya class
// const Nalini={
//     salary:5000,
//     fullname:"Nalini Sinha",
// };
// const Jyoti={
//     salary:5000,
//     fullname:"Jyoti Sinha",
// };
// const Aarti={
//     salary:5000,
//     fullname:"Aarti Sinha",
// };
// const Anita={
//     salary:5000,
//     fullname:"Anita Sinha",
// };
// Nalini.__proto__=student;
// Jyoti.__proto__=student; 

class toyotacar {
    constructor(brand,milage){
        console.log("creating new object");  
        this.brand=brand;
        this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    //constructor
    setBrand(brand){
        this.brand=brand;
    }
}

//defining objects
let baleno=new toyotacar("baleno",100); //constructor
baleno.setBrand("baleno");
let fortuner=new toyotacar("fortuner",200); //constructor
fortuner.setBrand("fortuner");
let lexus=new toyotacar(); //no brandname so undefined
// lexus.setBrand("lexus");
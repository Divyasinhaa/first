// const statement="Guava";
// switch(statement){
//     case "Mangoes":
//         console.log("mangoes are of 30 rupees");
//         break;
//     case "Apple":
//         console.log("Apples are of 90 rupees");
//         break;
//     default:
//         console.log("fruits are not available");    
// }   
let marks=prompt("enter marks");

switch(marks){
    case 90:
        console.log("A");
        break;
    case 70<marks<89:
        console.log("B");
        break;
    case 60<marks<69:
        console.log("C"); 
        break;
    case 50<marks<59:
        console.log("D"); 
        break;
    case 0<marks<49:
        console.log("F");
        break;              
    default:
        console.log("Out of syllabus");    
}   
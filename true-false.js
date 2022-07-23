//falsy values
// const Variable = 0; // false
// const Variable = ""; //false
// const Variable = " "; //true
// const Variable ; //undifind
// const Variable = null; //null
const Variable = "0";
if(Variable){
    console.log("Variable is true");
}else{
    console.log("Variable is false");
}


// /Expereminting object value by maping 
const student = [
    {
        name: "rohim",
        id:13,
        class: "six"
    },
    {
        name: "sohim",
        id:14,
        class: "six"
    }, 
    {
        name: "bohim",
        id:15,
        class: "six"
    } 
]

student.map(m=>console.log(m.name));//
const stufentId = student.filter((n)=>{
    return n.id>13;
}).map(n=>n.name);

console.log(stufentId);

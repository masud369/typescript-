let myMoney = 50;
console.log(myMoney);

function adddition (num1:number,num2:number){
    return num1+num2;
}

console.log(23);

let addintionResult = adddition(33,44);
 adddition(32,44);


let friendNames = ["abuldfds","kbuldddd","mbuld","sbulee","dbuloo",];
let demo:string = "";
friendNames.push("dlhfsfgslkdfj");
for (let i = 0; i < friendNames.length; i++) {
    const element = friendNames[i];
    if(element.length>demo.length){
        demo = element;
        console.log(demo);
    }
}

//declearing syntex
let players :{
    football:string;
    cricket:string;
};
players = {
    football:"Nymer",
    cricket:"shakib"
}
console.log(players);

//Use of interface

interface Players{
    name:string,
    salary:number,
    wife?:string,
    isPlaying:boolean,
}
const messy:Players = {
    name: "messy",
    salary: 3000000,
   // wife:"cyssy",
    isPlaying:true,
}

const rolando:Players = {
    name:"rolando",
    salary:920000,
    wife:"rolcut",
    isPlaying:true,
}

function getTax (Players:{salary:number} ){
    return Players.salary * 0.1;
}

const poorPlayer = {salary:1000000}
console.log(getTax(poorPlayer));





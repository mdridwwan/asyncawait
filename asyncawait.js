let errorHander = require("./errorHandler");

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Success");
//     },100)
// })

//  async function getData(){
//     const res = await promise;
//     console.log(res)
//     }

// getData()


// fetch("")
//     .then((res)=> res.json())
//     .then((data)=> console.log(data));

// async function getUser(){
//     const res = await fetch("");
//     const user = await res.json();

//    const res2 = await fetch(`https://www.example.com/${user.id}`);
//    const product = res2.json();
//    console.log(product);
// }


// Regular Function 
// function myAge(a,b){
//     let age = 20;
//     let ageOutput = "My Variable" + age;
//     let myAgeCalc = "My Age" + (a - b);
//     return ageOutput + " "+ myAgeCalc ;
// }

// // let myName = "Md RIdwan"

// let myAgeResult = myAge(2023, 2006)

// console.log(myAgeResult);
// // console.log("VAriable Output" + myName);

// Error Handleing 



let name = "Ridwan";
console.log(name);
    try{
        undefined.find();
    } catch(error){
        errorHandler(error)
    }

// getData();

function errorHandler(error){
    const {name, message, stack} = error;
    console.log(message);
    console.log(name);
}

let x = 3;
let y = 20;
let fatherYears = x * y;
let fatherAfterYears = x * y + y;
let childrenYears = y + y;
console.log(`Father Current Years: ${fatherYears}`);
console.log(`Childern Current Years: ${y}`);
console.log(`Father after 20 Years: ${fatherAfterYears}`);
console.log(`Childer after 20 Years: ${childrenYears}`);



try{
    location.find()
} catch(error){
    handlerFix(error);
}

function handlerFix(error){
    const {name, message, stack} = error;
    console.log(name);
}

try{
    undefined.find();
}catch(error){
    errorFix(error);
}

function errorFix(error){
    let {name, message, stack} = error;
    console.log(name)
}

console.log(errorHander)
// Where Promise node js working?

//Pendding
//Resolved
//Reject


const myPromise = new Promise((resolve, reject)=>{
    const user = "riddwan";
    if(!user){
        reject("Something want wrong!")
    }
    else{
        setTimeout(()=>{
            resolve({name: "Ridwan"})
        } ,1000)
    }
});
// consium

myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err));


const userIds = [1,2,3,4,5];
let userData = [];

for(let i = 0; i < userIds.length; i++){
    const userId = userIds[i];
   userData.push(myPromise); 
}
Promise.all(userData).then(res =>{
    console.log(res)
})

console.log(userData)


const userAlls = [1,2,3,4,5]
const userAllData = []

let ourPromise = new Promise((solve, reject)=>{
    if(!userAlls){
        reject("Data nai mane nai")
    }else{
        solve({name: "Farhan"});
    }
})

for(let i = 0; i < userAlls.length; i++){
    userAllData.push(ourPromise);
}

ourPromise.then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err);
})

Promise.all(userAllData).then(res =>{console.log(res)})


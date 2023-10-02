console.log(module);

function errorFix(error){
    let {name, message, stack} = error;
    // console.log("Name"+name)
    return name;
};



// module.exports = errorFix;

function two(){
    console.log("two");
}

 module.exports.errorHandler = errorFix;
 module.exports.two = two;

console.log(module)

console.log("hellow Ridwan");
let firstName = "Md";
let lastName = "Ridwan";
let fullName = firstName + lastName;
console.log(fullName);
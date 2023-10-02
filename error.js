let errorHandler = require("./errorHandler.js");




function errorHandler(error){
const {name, message, stack} = error;
console.log(message);
console.log(name);
}
console.log(errorHandler);

const {two, errorHandler2 } = require("./errorHandler2");


async function getData(){
    try{
        const emailError = new Error("Email already Exsit");
        throw emailError;
    } catch(error){
        errorHandler2(error);
    }
}
getData()
two()
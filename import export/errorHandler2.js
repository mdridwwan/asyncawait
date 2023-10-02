
function two(){
    console.log("two");
}

function errorHandler2(error){
    let {name, message, stack} = error;
    console.log(name, message);
   
}

module.exports ={
    two,
    errorHandler2
}
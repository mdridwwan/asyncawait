
export function errorHandler(error){
    let {name, message, stack} = error;
    console.log(name, message)
}

// module.exports.errorHandler = function errorHandler(error){
//     let {name, message, stack} = error;
//     console.log(name, message)
// }

// by defualt export.
// module.exports = errorHandler;

function two(){
    console.log("two");
}

// module.exports.two = function two(){
//     console.log("two");
// }

//name the export.
// module.exports.errorHandler = errorHandler;
// module.exports.two = two;
// console.log(module);

// module.exports = {
//     errorHandler: errorHandler,
//     two: two,
// }

// module.exports = {
//     errorHandler,
//     two,
// }


export default two;
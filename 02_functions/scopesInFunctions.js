
// var a =10
// if(true){

//     let a=20
//     console.log(" Inner a = " + a) 
//     let b =30 // accessible only for this scope
//     const c= 40
//     var d=60
// }
// console.log(a)
// console.log(d) // its declared as var so it can be accessible globally

// iNTRESTEING


// first way to wiritng function

// in this way of making function we can call the function before the fucntion scope like 
console.log(addone(21))
function addone(num){
    return num + 1
}

result1 = addone(5)
console.log(result1);

// second way to write function which is also called as expression

console.log(addtwo(21)) // But here we cant call it before initializing the function becoause it cant find the variable before initializing it 
const addtwo = function(num){
    return num+1
}
result2 =addtwo( 10)
console.log(result2);



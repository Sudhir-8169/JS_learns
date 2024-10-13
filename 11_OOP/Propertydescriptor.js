console.log(Math.PI);
Math.PI=4;
console.log("after changing the value",Math.PI);

/*
---------------------------------------->
 why its  not changing see..how
 
 */

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);
/*
Output:---------------------------------------->

value: 3.141592653589793,
writable: false,
enumerable: false,
configurable: false

*/ 

/*
---------------------------------------->
own object descripotr and change valye

*/
const chai={
    name:"ginger chai",
    price:10,
    isvalue:true

}
const sudhr=Object.getOwnPropertyDescriptor(chai,"name")
console.log(sudhr);

/*
Output:---------------------------------------->

  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true

*/ 

/*
---------------------------------------->
modify the default descriptor of object
*/
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
    configurable:false
})

console.log(chai.name)
chai.name="sudhir"
console.log(chai.name);


// Array and objects specific loops
// const arr=[1,2,3,4,5]
// const greetings= "Hello World"

// <------For Of loop------>

// for (const num of arr){
//     console.log(num)
// }

// for (const greet of greetings){
//     console.log(greet)
// }


// MAPS

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United Sate Of America")
// map.set('FR',"France")
// map.set('IN',"Indonesia") // key should be unique if you will repeat the key it will update the previuous with new one
// map.set('IR',"India")

// console.log(map)

// for( const item of map){
    // console.log(item);    //here item will store the value of key pair as array and we can print it key value using 0,1 indexing
    // console.log(item[0]);
    // console.log(item[1]);
// }

// diffrent approach for having key value in map

// for( const [item] of map){ //[item] it will print only key  
//     console.log(item);    
// }

// for( const [item,value] of map){ //[item,value] it will print both key and value  
//     console.log(item, ":-" ,value);    
// }


// Question 1: Like map can we iterate hrough objects using for loop look at the exmple for it
    
    // const myObject={
    //     "game1":"PUBG",
    //     "game2":"FreeFire"
    // }

    // for(const item of myObject){   //here it says myObject is not iterable
    //     console.log(item);
    // }

    // Ans 1: so answer is no we cant do that using for of loop


// <------For In Lopps ------->

// const myObjects={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby"
// }

// for(const item in myObjects ){
//     console.log(item,":",myObjects[item]);
// }

// // Question 2 : can we use for in loop in array

// arr1=[2,3,4,5]
// for(const i in arr1){
//     // console.log(i)
//     console.log(arr1[i]);
// }

//  Ans 2: Yes it will work but here the indexing of array will work as key so it will print the indexing


// Question 3: can for in be used in map lets seee the example for it

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United Sate Of America")
// map.set('FR',"France")
// map.set('IN',"Indonesia") 
// map.set('IR',"India")

// for (const item in map){
//     console.log(item);
// }
    // Answer 3: so answer neither throw any error and nor show the output


//<--------For each loop-------> 

    // const coding=["js","ruby","c","Java","python"]

    // coding.forEach(function (val){
    //     console.log(val)
    // });

    // coding.forEach(item => {
    //     console.log(item)
    // });
    
    // function printme(item){
    //     console.log(item);
    // }
    // coding.forEach(printme)

    // coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    // })



    // example of for each loop 

    // const myObjectdata=[
    //     {
    //         name:"sudhir",
    //         age:18
    //     },
    //     {
    //         name:"Gitika",
    //         age:18
    //     },
    //     {
    //         name:"Naveen",
    //         age:23
    //     },
    //     {
    //         name:"Prachi",
    //         age:23
    //     }
    // ]
    // myObjectdata.forEach((item)=>{
    //     console.log(`name:${item.name} and age:${item.age}`)
    // })
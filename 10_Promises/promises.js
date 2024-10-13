
// /*

// promises declaratation
// Promises is object which eventualy getting resolve and reject
// promises is used where there is some wait for the response
// other than  promises we can also use  async await to handle promises or anything which needs to be handles for some waiting time


// */
// /*------------------------------------------------------------------------------------------------------------> */

// const promiseOne = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             console.log("Promise one");
//             resolve() //resolve is connected through then
//         }, 10000)


//     })
// console.log(promiseOne);

// promiseOne.then(
//     () => {
//         console.log("promise one resolved")
//     }
// )

 /*------------------------------------------------------------------------------------------------------------> 

 New way of declaring promises and handling them  

 ------------------------------------------------------------------------------------------------------------> */

// new Promise(
//     (resolve, reject) => {

//         setTimeout(function () {

//             console.log("Async task");
//             resolve()

//         }, 10000)
//     })
//     .then(() => {
//         console.log("Promises Filled")
//     })

 /*------------------------------------------------------------------------------------------------------------> 

 Getting the value and passwing the value form async task to promise 

------------------------------------------------------------------------------------------------------------>*/

// const promiseThree = new Promise(
//     function (resolve, reject) {
//         setTimeout(
//             function () {
//                 console.log(("async task 3"));
//                 resolve(
//                     { username: "sudhir jha", age: "25" }
//                   
//                 ) 
//             }, 2000
//         )
//     }
// )

// promiseThree.then(
//     function (response) {
//         console.log("task 3 completed");
//         console.log(response);
//         console.log(response.username);

//     }
// )

// /*if we want yo return the value amd store somewhere then */

//  abc = promiseThree.then(
//     function (response) {

//         return response                //this value will get passed to mext then

//     })
//     .then(
//         function (data) {              //data comes form above function its method is called thening or chaining
//             console.log(data);
//             console.log(data.age);

//         }
//     )

/*------------------------------------------------------------------------------------------------------------>

Promise consumption for resolve and reject with error handling

------------------------------------------------------------------------------------------------------------>*/

// const promiseFour=new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             /* console.log("Async operation four"); */
//             let error =true
//             if(!error){
//                 resolve(["sudhir","Gitika","akash","ved","aditi","yogesh"])

//             }
//             else{
//                 reject("ERROR: Something went wrong") // rasing error using reject for condition error = true
//             }
            
            
//         },2000)
// })

// /*  console.log(promiseFour);*/

//  promiseFour.then((response)=>{
//     console.log("resolved promise and got th data")
//     return response;

//  })
//  .then((data)=>{
//     console.log("data we are getting......")
//     console.log(data);
    
//  })
//  .catch((e)=>{
//     console.log(e);
    
//  })
//  .finally(()=>{
//     console.log("default mmessage:EITHER PROMISE RESOLVED OR REJECTED");
    
//  })

/*------------------------------------------------------------------------------------------------------------>

Promise handling or cpnsumption using async and await

------------------------------------------------------------------------------------------------------------>*/

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error= true;
//             if(!error){
//                 resolve(["sudhir","Gitika","akash","ved","aditi","yogesh"])
//             }
//             else{
//                 reject("ERROR: Something went wrong") 
//             }      
//     },1000)
// })
 

/*console.log(promiseFive);*/

/*

In async await promise handle if there will be any error
for handlin that we have to handle it in <====TRY-CATCH BLOCK===>
 
*/
// async function consumePromiseFIve() {
//     try{
//         const response =await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
        
//     }
//     finally{
//             console.log("default mmessage:EITHER PROMISE RESOLVED OR REJECTED");
            
//           }
   
    
// }
// consumePromiseFIve()

/*------------------------------------------------------------------------------------------------------------>

*Promise handling or cpnsumption using async and await for api*

 API Link:"https://jsonplaceholder.typicode.com/users"

------------------------------------------------------------------------------------------------------------>*/


// async function getAllUsers(){

//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json();
//         /* console.log(data);  */
//         /* console.log(data[0]);  */
    
//          /*console.log("Printing all user name and email form random user API");*/
        
//         for (let index = 0; index < data.length; index++) {
            
//             console.log(`My name is {${data[index].name}} please contact me on {${data[index].email}}`);
            
//         }
        
//     } catch (error) {
//         console.log(error);
        
        
//     }
    
    
// }
// getAllUsers()

/*------------------------------------------------------------------------------------------------------------>

*Promise handling or cpnsumption using fetch*

 API Link:"https://jsonplaceholder.typicode.com/users"

------------------------------------------------------------------------------------------------------------>*/
fetch('https://jsonplaceholder.typicode.com/users')
.then ((response)=>{

    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((e)=>{
    console.log(e);
    
})
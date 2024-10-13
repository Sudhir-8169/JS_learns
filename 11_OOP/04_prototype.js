// /* String*/
// let myName="Sudhir     "

// /* Array*/
// let myHeroes=["Ironman , Captain America"]
// /*Object*/
// let heroPower={
//     thor:"Mjionir",
//     spiderman:"Sling",
//     getSpiderPOer: function (){
//         console.log(`spider power is ${this.spiderman}`);
        
//     }
// }

// /* 
// If we add prototype to Sring Only it will work on String
// */

// String.prototype.sudhir=function(){
//     console.log("Sudhir is present in heroPower");
    
// }

// /* 
// If we add prototype to Array Only it will work on array
// */
// Array.prototype.sudhir=function(){
//     console.log("Sudhir is present in heroPower");
    
// }

// /* 
// According to hirearchy in js everything is object
// If we add prototype to object
// it will work for Array,string ,functions everything
// */

//  Object.prototype.sudhir=function(){
//     console.log("Sudhir is present in heroPower");
    
// }

// /* call for string*/
// myName.sudhir()
// /* call for arrray*/
// myHeroes.sudhir() 
// /* call for object*/
// heroPower.sudhir()




// /*make a function of your own  which will count the length removing spaces of all the strings */

// a=" chai       "
// b= "    code  "
// c="  sudhir Jha     "

// String.prototype.trueLength=function (str) {
   
// console.log(`length of ${this.trim()} is ${(this.trim()).length}`)
// }
// c.trueLength()
// a.trueLength()

// "hey how are you               ".trueLength();
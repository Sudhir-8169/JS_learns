// /*------------------------------------------------------------------------------------->
// ==>Its a normal function performing multiplication
// ==> function can also be used as object
// ==> Prototypal inheritance 
// ------------------------------------------------------------------------------------->*/

// function multiplyBy5(num) {

//     return num * 5;
// }
// multiplyBy5.user = "Sudhir"
// console.log(multiplyBy5(19));
// console.log(multiplyBy5.user);


// /*------------------------------------------------------------------------------------->
// ==> uses of this keyword and constructors
// ==> Adding a user defined prototype method  to "createuser method"
// ==> making instance of function as a constructor
// ------------------------------------------------------------------------------------->*/

// function createUser(username, score) {
//     this.username = username;
//     this.score = score;
//     console.log(this);
//     console.log(`username:${this.username} and score is :${this.score}`);
    

// }
// /* way of calling method*/
// createUser("Suhdir",100)

// /* adding a protype methods {printMe , increment } to existing function create user*/

// createUser.prototype.increment = function () {
//     this.score++;
//     console.log(`${this.username}'s score is increased `);
// }
// createUser.prototype.printMe = function () {
//     console.log(`new score is :${this.score}`);
// }

// /*initiating the constructor for method for different user*/
// const user1 =  new createUser("Suhdir Jha", 15)
// const user2 = new createUser("Gitika verma", 1)


// /* using protype methods we have added to the function*/
// user1.increment()
// user1.printMe()
// user2.increment()
// user2.printMe()





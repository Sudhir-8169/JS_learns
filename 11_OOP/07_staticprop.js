// class USer{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`Username: ${this.username}`);
        
//     }
//     /*i want to create id whenever a user is created*/ 
//     /* but dont allow it ot object intstance of the class for that udse static*/ 
//     static createID(){
//         return `${this.username}123`
//     }
// }


// const hitesh =new USer("hitesh")
// /*It wil create id accpridng to user
// but because of static it will throw error
// */ 
// // console.log(hitesh.createID());

// hitesh.logMe()


// /*
// static wont allow to it inhertied 
// class for acessingg static method

// */

// class Teacher extends USer{
//     constructor(username,email){
//         super(username)
//         this.email=email
//     }

// }

// const chai=new Teacher("gitika","gitika@Iloveyou")

// chai.logMe()
// chai.createID()




 
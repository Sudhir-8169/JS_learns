class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class teacher extends user{

    constructor(username,email,padssword){
        /*before having super constructor called we can not use this keyword */ 
        super(username)
        // console.log(this.username);
        this.email=email
        this.password=padssword
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const chai= new teacher("Sudhir jha","abc@gmail.com","123456")

const Masalachai= new user("Gitika Verma ","abc@gmail.com","123456")

chai.addCourse()
Masalachai.logMe()

console.log("chai instanceof teacher" ,chai instanceof teacher);

console.log("chai instanceof user" ,chai instanceof user);

console.log("Masalachai instanceof teacher" ,Masalachai instanceof teacher);


console.log("Masalachai instanceof user" ,Masalachai instanceof user);

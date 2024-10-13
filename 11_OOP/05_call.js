function setUsername(username,message){
    this.username=username  
    console.log("called"+message);
    

      
}

function createUser(username,email,password){
    /* below function will be called but username will be not set to the*/ 
    setUsername(username," using direct function ") 
    /* below function add username*/ 
    setUsername.call(this,username," using call method");

    this.email=email;
    this.password=password
}

const chai =new createUser("sudhir","abc@gmail.com","123456")
console.log(chai);

const code =new createUser("gitka","abc@gmail.com","123456")
console.log(code);
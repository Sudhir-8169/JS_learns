//ES6

class user{
    constructor(usname,email,password){
        this.username=this.username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}
const chai=new user("chai","chai@gmail.com","123")

console.log(
    chai.encryptPassword());

//behind the scene

function user1(username,email,password){
this.username=username
this.email=email
this.password=password

}
user1.prototype.encyptPassword=function(){
return `${this.password}abc`
}

const tea =new user1("sudhir","abc@gmail.com","123")
 

console.log(tea.encyptPassword()
);

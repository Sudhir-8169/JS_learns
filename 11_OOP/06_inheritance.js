const user={
username:"sudhir"
}
const teacher={
    makevideo:true
}
const TechSupport={
    isavailable:false
}
const TAsupprt={
    makeAssignmtnt:'JS assignment',
    fulltime:true,
     /*To acess other object with this object we can use*/
    // __proto__:teacher
    // __proto__:TechSupport
}
/*other way to  acess other object with this object we can use*/
// teacher.__proto__=user


/* Modern Syntax*/

Object.setPrototypeOf(TAsupprt,TechSupport)

Object.setPrototypeOf(TAsupprt,teacher)

Object.setPrototypeOf(teacher,user)



console.log("Acess using (TAsupport -> teacher) using protypal inheritence:"+TAsupprt.makevideo);
console.log("Acess using (TAsupport -> teacher -> user ) using protypal inheritence:"+TAsupprt.username);
console.log("Try to aceess TAsupprt without using prototypal inherotence :"+TAsupprt.isavailable);

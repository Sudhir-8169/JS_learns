//single ton
//its made as contructor method

//object literals

    // mySym=Symbol("key1");//declaring symbol in javascript
    // const Js_user={
    //     name:"sudhir",
    //     age:18,
    //     location:"Noida",
    //     email:"jhasudhir032@gmail.com",
    //     [mySym]:" 'its my key' ",//used sybbol data type in js
    //     "my value":"sudhir",

    // }
//Acesss objects key pairs format
    // console.log( Js_user.email,Js_user.name,Js_user.age,Js_user.location);//not agod practice
    // console.log(Js_user["name"],Js_user["age"],Js_user["email"],Js_user["location"],Js_user["my value"])//goog practice
    // console.log(Js_user[mySym]);//for printing symbol 

//how to change the value in object

    // Js_user["email"]="jhasv2001@gmail.com";
    // console.log("after changing value"+" "+Js_user["email"])

//if you wantg to restrict the value in object so no onr can change its for that:

    // Object.freeze(Js_user)
    // Js_user["name"]="some random user"//its will not refelect in the object
    //  console.log(Js_user)

    //  Js_user["greeting"] =  function(){
    //     console.log(`hello ${this.name}`);
    //  }
    //  console.log(Js_user)
    //  console.log(Js_user.greeting())
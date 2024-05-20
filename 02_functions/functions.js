// IMP :---> Rest and Spread Operator
//           Syntax For Both: "..."
// syntax of these are same but its differce between them are its use cases some place its used as rest and some place its used as Spread


        // function addNumbers(num1,num2){
        //     return num1+num2
        // }

        // console.log(addNumbers(10,15))

        // var results=addNumbers(2,4); 
        // console.log(results)


// If we dont know how many parameter will pass to the function for that solution is "rest" Operator

/// in this only one fixed value can be passed

        // function calculatePrice(num1){      
        //     return num1
        // }
        // var results=calculatePrice(3)
        // console.log(results)

//here we can pass how much you want and it will return as array using "..." rest operator

        // function calculatePrice(...num1){      
        //     return num1
        // }
        // var results=calculatePrice(3,4,5,6,7)

        // console.log(results)

// In this code we can pass as much arugument  we need but it will store first 2 value in  given other value and aprt form tht will stoe in the num
//  array
        // function calculatePrice(val1,val2,...num1){
        //         console.log(val1)
        //         console.log(val2)
        //     return num1
        // }
        // var results=calculatePrice(3,4,5,6,7)

        // console.log(results)


//  object handling in functions

        // object1 ={
        //         username:"sudhir",
        //         price:"199"
        // }
        // function ObjectHandler(anyobject){
        //         console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        // }

        // ObjectHandler(object1)

        // ObjectHandler({
        //         username:"Gitka",
        //         price:"299"})

//Array handling in fucntion

        MyArray1=[200,12,344,222,44]

        function getArrayFirstValue(arr){
                return arr[0] 
        }
        console.log(getArrayFirstValue(MyArray1))
        console.log(getArrayFirstValue([1,2,3,4,5,6,8,9]))
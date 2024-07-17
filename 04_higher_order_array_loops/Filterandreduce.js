// const coding=["js","ruby","java","python","cpp"]

// const values = coding.forEach((val)=>{         // what if we store the for-each loop in any variable
//    console.log(val) ;
// })

// console.log(values); // it will print undefined so this for-each method doent return anything

// note:- for each doesnt return anything 

//--------Filter in array----------->

const myNums=[1,2,3,4,5,6,7,8,9,10]

const values = myNums.filter((num)=>{return num>3}) //it will return the array based on condition

console.log(values);

// if we want to execute same as above using for each loop....lets seee how can we do that!
    const newNums=[]

    myNums.forEach((item)=>{
        if(item>3){
            newNums.push(item)
        }
    })

    console.log(newNums);
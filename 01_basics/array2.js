arr=[1,2,3]

arr1=[3,4,5]

//<-------------------------------------------for pushing array into another array
    // console.log( arr.push(arr1))
    // console.log(arr)

// <------------------------------------------for mergin the array
    // merged_array=arr.concat(arr1)
    // console.log(merged_array);


    // new_merged_array=[...arr,...arr1]//------->using spread uperator
    // console.log(new_merged_array)

    // messed_array=[1,2,3,[4,5,6,[7,8]],[3,4,5],[1,[2,[10,11,12,[12]]]]]
    // new_flat_array =messed_array.flat(1)
    // console.log( new_flat_array)

    // new_flat_array =messed_array.flat(2)
    // console.log(new_flat_array)

    // new_flat_array =messed_array.flat(3)
    // console.log( new_flat_array)

    // new_flat_array =messed_array.flat(4)
    // console.log(new_flat_array)

    // new_flat_array =messed_array.flat(Infinity)
    // console.log(new_flat_array)       


// <------------------------------------------coverting object ,string and other things to 
    //for checking is it is array or not
    // console.log(Array.isArray(arr))
    // console.log(Array.isArray("sudhir"))

    //for creating array from different type
    
    console.log(Array.from("sudhir")); //for making array of string

    var obj={
        name:"sudhir",
        age:9,
        stream:"science"
    }
    console.log(Array.from(obj));//we can not make array of whole object 
    console.log(Array.from(obj.stream))

    console.log(Array.of(123))
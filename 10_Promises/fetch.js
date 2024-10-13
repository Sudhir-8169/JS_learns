/*------------------------------------------------------------------------------------>
--> The fetch() function will reject the promise on some errors,
but not if the server responds with an error status like 404:
so we also check the response status and throw if it is not OK.

--> The fetch() function returns a Promise which is fulfilled with
a Response object representing the server's response. 

--> You can then check the request status and extract the body of 
the response in various formats, including text and JSON, 
by calling the appropriate method on the response.

-------------------------------------------------------------------------------------->

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then ((response)=>{

    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((e)=>{
    console.log(e);
    
})


/*------------------------------------------------------------------------------------>


-------------------------------------------------------------------------------------->
*/
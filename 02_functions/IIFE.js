//Immediately Invoked Functions Expressions (IIFE)
//its used to exceute when the page is started
//if we dont want to use global variables in the function
// var anynmbers=10;
// (function first(){
//     title="sudhir"
//     console.log("hey welcome to the page"+" "+title);
// })(); //terminate the first IIFE using " ; "

// //when we want to excute two IIFE the we should terminate the first IIFE using " ; " at the end of the First IIFE otherwise it will give you error
// (()=>{
//     console.log("DB Connected");
//     console.log(anynmbers);
// })();


// result= ((num1,num2)=>{
//  console.log(anynmbers);
//  return num1+num2; 
// })(10,30)

// console.log(result);

// function second(){
//    console.log(anynmbers); 
// }


var counter = (function() {
	var count = 0;

	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();
console.log(counter);
// Increment the counter
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // Output: 3

// Trying to access the private count variable directly
console.log(counter.count); // Output: undefined (cannot access private variable)

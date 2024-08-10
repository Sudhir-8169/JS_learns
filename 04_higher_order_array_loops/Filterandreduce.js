// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((val) => {         // what if we store the for-each loop in any variable
//     console.log(val);
// })

// console.log(values); // it will print undefined so this for-each method doent return anything

// note: - for each doesnt return anything

// --------Filter in array----------->

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter((num) => { return num > 3 }) //it will return the array based on condition

// console.log(values);

// // if we want to execute same as above using for each loop....lets seee how can we do that!
// const newNums = []

// myNums.forEach((item) => {
//     if (item > 3) {
//         newNums.push(item)
//     }
// })

// console.log(newNums);

// ----------other example of filter------------>

// const books = [
//     {
//         title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004
//     },
//     {
//         title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
//     },
//     {
//         title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
//     },
//     {
//         title: 'Book Four', genre: 'Science', publish: 2009, edition: 2014
//     },
//     {
//         title: 'Book Five', genre: 'Fiction', publish: 1987, edition: 2010
//     },
//     {
//         title: 'Book Six', genre: 'History', publish: 1983, edition: 2014
//     },
//     {
//         title: 'Book Seven', genre: 'Fantasy', publish: 1982, edition: 2003
//     },
//     {
//         title: 'Book Eight', genre: 'Fiction', publish: 1981, edition: 2004
//     },

// ];

// userbooks = books.filter((bk) => {
//     return bk.genre === 'History'
// })

// userbooks = books.filter((bk) => bk.publish <= 2000 && bk.genre === "History")

// console.log(userbooks);

// <========== map and chaining of methods ==========>

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnumbers = myNumbers.map((num) => {

//     return num + 10

// })

// console.log("Original:", myNumbers);

// console.log("After using map:", newnumbers);

// // <=======chaining==========>

    // Like below we can add as much method at once that we called chaining

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums1 =
//     myNumbers.filter((num) => num <5)

//     console.log(newnums1);
// const newnums =
//     myNumbers.filter((num) => num > 5).map((num) => num + 10)

// console.log(newnums);
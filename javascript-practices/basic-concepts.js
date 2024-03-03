console.log("basic-concepts")
// Problem: Create a function that takes two numbers as arguments and returns their sum.

// Time to Complete: 5-10 minutes

function summation(num1,num2){
    return num1+num2
}
res=summation(2,28)
console.log(res)


// Problem: Write a function to check if a given number is prime.
// Time to Complete: 10-15 minutes

function checkPrime(num){
    let count=0;
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count == 0){
        return "Prime"
    }else {
        return "Not Prime"
    }
}

res=checkPrime(1004)
console.log(res)



// Functions
// Problem: Create a function that takes an array of numbers and returns the average.
// Time to Complete: 10-15 minutes

function averageOfNumbers(arr){
   const sum = arr.reduce((accumulator,currentValue) => {
    return accumulator+currentValue
   },0 )
   return sum/arr.length
}
res=averageOfNumbers([2,4,6,8])
console.log(res)


// Problem: Write a function that takes a string and returns the reverse of the string.

// Time to Complete: 10-15 minutes

function reverseString(str){
    const reverseStr = str.split(" ").reverse().join(" ")
    console.log(reverseStr)
}
reverseString("nikki is a bitch")



// Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Time to Complete: 15-20 minutes

let target=15
let numArr=[1,2,22,3,12,5,10]
function findTarget(target,nums){
    const numMap = {}; // Create an empty object to store numbers and their indices
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement for the current number
        
        // Check if complement exists in the map
        if (numMap.hasOwnProperty(complement)) {
            // If found, return the indices of complement and current number
            console.log(numMap[complement],i)
            return [numMap[complement], i];
        }
        
        // Otherwise, store the current number and its index in the map
        numMap[nums[i]] = i;
        console.log(numMap)
    }
    // console.log(numMap)
    
    // If no such pair found, return an empty array
    return [];

}
res=findTarget(target,numArr)
// console.log(res)
// Problem: Implement a function to rotate an array by k positions.

// Time to Complete: 15-20 minutes


// Problem: Create an object representing a library, with methods to add a book, remove a book, and find a book by title.

// Time to Complete: 15-20 minutes

const library = {
    books: [],

    addBook: function (book) {
        this.books.push(book);
    },

    removeBook: function(title){
        console.log(title)
        const index = this.books.findIndex(book => book.title === title)
        console.log(index)
        if(index !== -1){
            this.books.splice(index,1)
            console.log(`${title} has been removed from the library.`);
        }else {
            console.log("No book found")
        }
    },

    findBook: function(title){
        const book = this.books.find(book => book.title === title)
        if(book){
            console.log(`${title} found in the library`)
        }else{
            console.log("Book not found !!!!")
        }

    }
}

library.addBook({title:"The nikki singh book"})
console.log(library.books)
library.removeBook("The nikki singh book")
console.log(library.books)
// Problem: Implement a function to merge two objects into one.

// Time to Complete: 10-15 minutes

const obj1 = {
    name: 'nikki',
    age: 24,
    hobby: 'sleep',
    interest:'sex'
}
const obj2 = {
    name1: 'nikki ka bhoot',
    age1: 24,
    hobby1: 'sleep',
    interest1:'sex'
}

console.log(obj1)



function mergeInventory(inventory1, inventory2) {
    let mergedInventory = {}

    for(item in inventory1){
        console.log(item)
        mergedInventory[item] = inventory1[item]
        console.log(mergedInventory);
    }
    for(item in inventory2){
        console.log(item)
        if(mergedInventory.hasOwnProperty(item)){
            mergedInventory[item] += inventory2[item]
        }else {
            mergedInventory[item] = inventory2[item]
        }
        console.log(mergedInventory);
    }

    return mergedInventory
}


const inventory1 = {
    "apple": 24,
    "banana":24,
}
const inventory2 = {
    "banana": 12,
     "apple": 24
}
const merged = mergeInventory(inventory1,inventory2)
console.log(merged)
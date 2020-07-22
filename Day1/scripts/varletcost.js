// var is the global scope
var name = "Raghu"    // String
var age = 22          // Number
var HDKCMNow = false  // Boolean 
var longuages = ['Kannada', 'English'] // Array
var my_details = {name:'Raghu', Hobby:'coding', Fashion:'Learning new things'} // Object

// var a = 10;
// console.log(a);

var a = null; // null is not equal to zero
console.log(a);

// Let is local scope
{
    let city; // let is used to initilize and later we assign value
    let name = 'Ravi'
    console.log(name)
}
console.log(name)

// const means constant
const country = 'india'; // we can't assign another value to const variable once we assigned value
console.log(country);

//  const country = 'UK'; // here it gives error
// console.log(country);

// we can't replace entire array but we can add element 
const friends = ['Nagendra', 'Raju']
console.log(friends)
friends.push('Keerthi')
friends.push('Kiran')
console.log(friends)

/* Naming  a variable
1. variable name can't start with number
2. it can start with letter, $, _
3. $ is mainly used in jquery
4. _ is used to declare private variables [OOOPS in javascript] */

/* style of writting the name
1. camelcase ***** important used here 
2. kebabcase
3. snakecase
4. Pascalcase */





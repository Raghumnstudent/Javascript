console.log('Assignment 3')

// // Q1)Take a number from user and write a fuction which the check the number is even or odd. Assign the result to a variable and log that variable in console
// let num = prompt('Enter The Number')

function odd_even(num){
if (num%2 == 0){
    console.log(num,'is even Number')
}
else{
     console.log(num,'is odd Number')
}
}
odd_even(num)



//Q2)write a programm which take OS name and version from the user separated by a space. Then log OS name and version on console

let OS = prompt('Enter Your System OS')
let  version = prompt('Enter Your System version')
console.log(`The OS name is ${OS}  and version is ${version}`)



//Q3)write a program to take marks as input from the user and grade him accordingly. use conditional statements. Also the same cose using switch or ternary
let marks = prompt('Enter The Marks ')

if (marks >= 90){
    console.log(`Marks are ${marks} and grade is A`)
}
else if (marks >= 80){
    console.log(`Marks are ${marks} and grade is B`)
}
else if (marks >= 70){
    console.log(`Marks are ${marks} and grade is C`)
}
else if (marks >= 60){
    console.log(`Marks are ${marks} and grade is D`)
}
else if (marks >= 50){
    console.log(`Marks are ${marks} and grade is E`)
}
else if (marks >= 40){
    console.log(`Marks are ${marks} and grade is F`)
}
else {
    console.log(`Marks are ${marks} and Result is Faile`)
}

// using Ternary 
let result =    (marks >= 90) ? 'Marks are ' + marks + ' and grade is A':
                (marks >= 80) ? 'Marks are ' + marks + ' and grade is B':
                (marks >= 70) ? 'Marks are ' + marks + ' and grade is C':
                (marks >= 60) ? 'Marks are ' + marks + ' and grade is D':
                (marks >= 50) ? 'Marks are ' + marks + ' and grade is E':
                (marks >= 40) ? 'Marks are ' + marks + ' and grade is F':
                'Marks are' + marks + 'and grade is Fail';
console.log(result)
console.log('Assignment 4')

//Q1) create a for loop that iterates up to 100 , output is Fizz  at multiple of 3, output is buzz   if multiple of 5 , output is Fizzbuzz  at multiple of 3 , 5
for(i=1; i<=100; i++){
    if(i%3 == 0  && i%5 == 0){
        console.log(i,'fizzbuzz')
    }
    else if(i%3 == 0){
        console.log(i, 'fizz')

    }
    else if(i%5 == 0){
        console.log(i, 'buzz')
    }
}

//Q2) Destructure the following object
const student = {
    name:'Helsinki',
    age: 24,
    projects:{
        diceGame:'Two player dice game using javascript'
    }

}
const {name, age, projects} = student;
console.log(name, age, projects)


console.log('Name is',student.name)
console.log('age is',student.age)
console.log('Project is',student.projects.diceGame)

//Q3) shopping problem
let shoppinglist = ['vegitable', 'fruits', 'sweets', 'cloths']
console.log(shoppinglist)
let shoppingBasket = ['Pens', ...shoppinglist, 'lays', 'mango juice']
console.log(shoppingBasket)

//Q4) create calculator
let op = prompt('Enter operation like +  -   *   /   **   %  ')
let num1 = prompt('Enter Number1')
let num2 = prompt('Enter Number2')
if(op == '+'){
    console.log('sum of numbers', +num1 + +num2)
}
else if(op == '-'){
    console.log('subtraction of numbers', +num1 - +num2)
}
else if(op == '*'){
    console.log('multiplication of numbers', +num1 * +num2)
}
else if(op == '/'){
    console.log('division of numbers', +num1 / +num2)
}
else if(op == '**'){
    console.log('square of number', +num1 * +num1)
    console.log('square of number', +num2 * +num2)
}
else if(op == '%'){
    console.log('percentage of numbers', ((+num1/+num2)*100))
}
else {
    console.log('operator is invalid')
// }

//Q5) Sales problem
let sales = prompt('Enter sales')
console.log('his sales', sales)
let salary = 10000;
console.log('salary is', salary)
if (sales >= 0 && sales <= 5000){
    console.log(`Total commission earmed by him is 200`)
}
else if(sales >= 5001 && sales <= 10000){
    console.log(`Total commission earmed by him is 500`)
}
else if(sales >= 10001 && sales <= 20000){
    console.log(`Total commission earmed by him is 500`)
}
else {
    console.log(`Total commission earmed by him is 1000`)
}

//Q6) ask again and again untill user enter greater than 100 number or cancel
num = prompt('enter the number')
while(num<100){
    num = prompt('enter the number')
    if(num>=100 || num == null || num == "" || num == null){
        break
    }
}

//Q7) give a prime numbers for given n range
function prime_or_not(num){
    let store = []; 
    let prime = [];
    for(i = 2; i<=num; i++){
        if(!store[i]){
            prime.push(i);
            for(j=i<<1; j<=num; j+=i){
                store[j] = true
            }
        }
    }
    return prime;
}  
let num = prompt('enter the number')
console.log(prime_or_not(num));


//Q8) Rewrite function using arrow function
let  ask = (question,yes,no)=>{if(confirm(question)) yes(); else no()}

let result = ask('are you agree',()=>alert('you agreed'), ()=>alert('you cancelled the excecution'));



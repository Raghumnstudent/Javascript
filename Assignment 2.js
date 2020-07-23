//q1) write a js code which take input from the user and log it in console
name = prompt('Enter Your Name')
console.log(name)
age = prompt('Enter Your Age')
console.log(age)
family = prompt('How many members in Your family')
console.log(family)
goal = prompt('Enter Your goal')
console.log(goal)

// q2) Explain with examples the remaining methods of String and Array

let raghu = 'Letsupgrades(Prasad Sir) is teaching  well for code learner Prasad for for'
console.log(raghu.slice(4,12))
console.log(raghu.slice(-7,-2))

console.log(raghu.substring(3, 8))
console.log(raghu.substring(5, 9))

console.log(raghu.replace('well', 'Excelent' ))
console.log(raghu.replace( 'Prasad', 'Ravi' ))

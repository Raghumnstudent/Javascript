console.log('Assignment 5')

// Q1) take number , make array, generate odd numbers, cube the odd numbers
let num = prompt('Enter the positive number')
let number = []
for(i=1; i<=num; i++){
    number.push(i)
}
console.log(number)
let odd = number.filter((el)=>(el%2==1))
console.log(odd)
let square = odd.map((el)=>(el**3))
console.log(square)

// Q2) create class , moderator class
class user {
    constructor(name,age,email,courses,coins){
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = courses
        this.coins = [0]
    }
    login(){
        console.log(`${this.name} has login `)
    }
    logout(){
        console.log(`${this.name} has logout `)
    }
}


// user_details.login()
// console.log(user_details)

class moderator extends user{
    // deleteuse(user){
    //     users = users.filter(u=>{
    //         return u.email != user.email
    //     })
    // }
    addcoin(user){
        users = users.filter(u=>{
            return u.courses == user.courses 
        })
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`)
    }
    removecoins(user){
        users = users.filter(u=>{
            return u.courses == user.courses 
        })
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`)
    }
}
let user1_details = new user('raghu', 22, 'raghu@gmail.com', 'Js')
let user2_details = new user('Rocky', 28, 'r@gmail.com', 'js')
let user3_details = new user('Roy', 88, 'roy@gmail.com', 'js')
let users = [user1_details, user2_details, user3_details]
console.log(users)

let mod1 = new moderator('mahadev', 45, 'mahadev@gmail.com', 'js')
let mod2 = new moderator('maha', 95, 'maha@gmail.com', 'js')
let mod3 = new moderator('raghu', 22, 'raghu@gmail.com', 'Js')
let mod4 = new moderator('Roy', 88, 'roy@gmail.com', 'js')

let modulate = [mod1, mod2, mod3, mod4] 
console.log(modulate)
mod1.addcoin(user1_details)
mod2.addcoin(user1_details)
mod3.addcoin(user3_details)
mod4.addcoin(user2_details)
mod1.addcoin(user1_details)
mod2.addcoin(user1_details)
mod3.addcoin(user3_details)
mod4.addcoin(user2_details)
mod1.removecoins(user1_details)
mod2.removecoins(user1_details)
mod3.removecoins(user3_details)
mod4.removecoins(user2_details)


//Q3) using promise/async await/fetch get randam todos from jsonplaceholder
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2')
  ]).then(async([aa, bb]) => {
    const a = await aa.json();
    const b = await bb.json();
    return [a, b]
  })
  .then((responseText) => {
    console.log(responseText);

  }).catch((err) => {
    console.log(err);
  });


  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => `${response.url}: ${response.status}`
    ));




fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/8')
  .then(response => response.json())
  .then(json => console.log(json))




  async function fetchjokes(){
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      console.log(data);
  }
  fetchjokes()



  async function fetchjokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await response.json();
    console.log(data);
}
fetchjokes()






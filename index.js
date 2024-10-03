function string (str){
    return str.split(''), reverse() .join('');

}
console.log(string);


function countcharacteres(count){
    return countcharacteres.length
   
}

const str = "hello world";

let result = str.charAt(0).toUpperCase() + str.slice(1);
console.log(result); 


//Array functions

 let = [8, 9, 10, 11, 13,14,15]
 let sum = 0
 for (let i = 0; i < numbers.length; i++) {
     sum += numbers[i];
     max =numbers[i]  }
 
 console.log(sum)
 let numbers = [3, 7, 2, 8, 5];
 let max = numbers[0];
 for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] > max) {   
         max = numbers[i];
     }
  }
 console.log(max);

 console.log(max);
 let min =numbers [0]
 for (let i=0 ; i<numbers.length; i++){
   if (numbers[i]>min){
     min=numbers[i ]
   }
 }
 console.log(min);

 let sons= prompt ("How many sibligns do you have ?")
 let names=[]
   for (let i = 0; i <sons; i++) {
       let name = prompt ("enter the name" + sons);
       names.push(name)            
   }
   console.log(names);

//  let numbers =[1,2,3,4,5,6,7,8,9,10]
//  let max =numbers [0];
//  for (let i=0 ; i<numbers.length; i++){
//    if (numbers[i]>max){
//      max=numbers[i ]
//    }
//  }
 



// let names = ["Brahim", "Youcef", "Fares"];

// let numbers = [0,1,4,6,7,9,10,13,45,17,80,10,24, 48,301 ,97 ,400];  // numbers[i]
// //             0 1 2 3 4 5 6  7  8  9  10 11 12  i   */

//  let n = numbers[0];
// for(let i=0; i<numbers.length; i++) {
//   if(numbers[i] > n) {
//     n = numbers[i];
//   }
// }
// console.log(n); 

//  let sum = 0;
// for(let i=0; i<numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum); 


 for(let i=0; i < numbers.length; i++) {
  if(numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
} 

 for(let i = numbers.length - 1; i >= 0; i--) {
  if(numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
}
 


// let number = prompt("How many siblings do you have ?");
// let names = [];
// for(let i=0; i<number; i++) {
//   let name = prompt("Enter the name " + number);
//   names.push(name);
// }
// console.log(names); 

// let numbers = [1,2,3,4,5];
// numbers[0];

// let person = {
//   name: "Hamid",
//   age: 50,
//   adult: true,
//   location: {
//     country: "Algeria"
//   },
//   hello: function() {
//     console.log("Function inside person");
//     return "test"
//   }
// }


//mathematical functions
let a=20
let b=30
function adding(add){
    return a+b
}
console.log(adding);


function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}


function fibonacci(r){
    let a =0 ; let b=1 ; c ;
    for ( let i=0; i<r ; i++)
        console.log(a);
    c=a+b;
    a=b;
    b=c;
}









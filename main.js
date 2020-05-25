///let inputEl= document.querySelector("#input")
//let inputEl= document.querySelector("#input2")
//let inputEl= document.querySelector("#input3")
//let inputEl= document.querySelector("#input4")
//  I tried to make as user input 







//add
console.log("1. Add results ")

function add(num1, num2) {
    return num1 + num2
}

console.log(add(2, 4))
//Multiply
console.log("2. Multiply")
function Multiply(num1, num2) {
    return num1 * num2
}
console.log(Multiply(2, 4))
//Power
console.log("3. Pwer") 
function power(num1, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= num1
    return result;
}
console.log(power(2,8))
//Factorial 
console.log("4. Factorial") 
function Factorial(F) {
    var result = 1;
    for (var count = 1; count <= F; count++)
        result *= count
    return result;
}

console.log(Factorial(5))
//Fibonacci
console.log("4. Fibonacci") 

 function Fibonacci (n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}
console.log(Fibonacci(8))



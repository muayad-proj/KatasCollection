
let inputEl3= document.querySelector("#input3")
let inputEl4= document.querySelector("#input4")
let AddBotton= document.querySelector("#add")
let multiplyBotton=document.querySelector("#Multiply")
let PowerBotton=document.querySelector("#Power")
let FactorialBotton=document.querySelector("#Factorial")
let FibonacciBotton=document.querySelector("#Fibonacci")

let ResultsEl=document.querySelector("#Result")

//add
console.log("1. Add results ")
function add(num1, num2) {
    return num1 + num2
}
AddBotton.addEventListener("click", function () {
    if(inputEl4.disabled=false){
        inputEl4= true
    }
    else{
    let userinput = Number(inputEl3.value)
    let userinput1=Number(inputEl4.value)
   // console.log(userinput)
   ResultsEl.innerHTML+= "<br> Rsult Add="+ add(userinput, userinput1)
    console.log(add(userinput, userinput1))
    }
})

//Multiply
console.log("2. Multiply")
function Multiply(num1, num2) {
   let  totale =0
    for(let i=1; i<= num2; i++){
    totale= add(totale,num1)
    }
    return  totale
   // return num1 * num2
}
multiplyBotton.addEventListener("click", function () {
    if(inputEl4.disabled=false){
        inputEl4= true
    }else{
    let userinput = Number(inputEl3.value)
    let userinput1=Number(inputEl4.value)
   ResultsEl.innerHTML+= "<br> Result Multiply="+ Multiply(userinput, userinput1)
    console.log(Multiply(userinput, userinput1))
    }

})
console.log(Multiply(2, 4))



//Power
console.log("3. Pwer") 
function power(num1, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
    result= Multiply(result,num1)    
   // result *= num1
    return result;
}

PowerBotton.addEventListener("click", function () {


    if(inputEl4.disabled=false){
        inputEl4= true
    }else{
        let userinput = Number(inputEl3.value)
    let userinput1=Number(inputEl4.value)
   ResultsEl.innerHTML+= "<br> Result power="+ power(userinput, userinput1)
    }

})
console.log(power(2,8))

//Factorial 
console.log("4. Factorial") 
function Factorial(F) {
    var result = 1;
    for (var count = 1; count <= F; count++)
    result= Multiply(result,count)
       // result *= count
    return result;
}

FactorialBotton.addEventListener("click", function () {
   
    let userinput = Number(inputEl3.value)
    inputEl4.disabled=true
   ResultsEl.innerHTML+= "<br>  Result Factoria="+ Factorial(userinput)

})

console.log(Factorial(5))

//Fibonacci
console.log("4. Fibonacci") 

 function Fibonacci (n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i < n; i++) {
    f=add(a,b)
     //   f = a + b;
        a = b;
        b = f;
    }
    return f;
}
FibonacciBotton.addEventListener("click", function () {
    let userinput = Number(inputEl3.value)
   ResultsEl.innerHTML+= "<br> Result Fibonacci="+ Fibonacci(userinput)
   inputEl4.disabled=true
})
console.log(Fibonacci(8))



function getNumbers(){
    //get the first value from the page
    let num1 = document.getElementById("numberOne").value;
    //get the second value from the page
    let num2 = document.getElementById("numberTwo").value;

    //try and convert the numbers
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (!Number.isInteger(num1) || !Number.isInteger(num2) ) {
        

        Swal.fire(
            {
                backdrop: false,
                title: 'OOPS!',
                text: 'You must enter Numbers'
            }
        );
    } else{
        let sum = sumNumbers(num1, num2);
        let sub= subNumbers(num1, num2);
        let product = multiplyNumbers(num1, num2);
        let quotient = divideNumbers(num1, num2);
        let sumAll = addAllNumbers(num1, num2);
        let factorial = factorialNumbers(num1, num2);

        console.log("sub=" + sub);
        console.log("add=" + sum);
        console.log("product=" + product);
        console.log("quotient=" + quotient);
        console.log("sumAll=" + sumAll)
        console.log("factorial=" + factorial);

        //DISPLAY THE VALUE INSIDE THE DEBUG CONSOLE//
        displayResults(sum,sub,product,quotient,sumAll,factorial);
    }
    
} 

//display all the resluts from our math funtions//
//display the value in the debug console
function displayResults(sumResult, subResult, productResult, quotientResult, sumAllResult, factorialResult){
    let results = document.getElementById("results");
    results.innerHTML = ""

    let pTag = document.createElement("p"); // ptag = "<p></p>"
    pTag.classList.add("pBlue");
    pTag.innerHTML = "The sum of the numbers=" + sumResult;

    let pTagSub = document.createElement("p");
    pTagSub.classList.add("pRed");
    pTagSub.innerHTML ="The difference in the numbers=" + subResult;

    let pTagProduct = document.createElement("p");
    pTagProduct.classList.add("pBlue")
    pTagProduct.innerHTML ="The product of the numbers=" + productResult;

    let pTagQuotient = document.createElement("p");
    pTagQuotient.classList.add("pRed");
    pTagQuotient.innerHTML ="The quotieint of the numbers=" + quotientResult;

    let pTagSumAll = document.createElement("p");
    pTagSumAll.classList.add("pBlue");
    pTagSumAll.innerHTML ="The sum of all the numbers=" + sumAllResult;

    let pTagFactorial = document.createElement("p");
    pTagFactorial.classList.add("pRed");
    pTagFactorial.innerHTML ="The factorial of the numbers=" + factorialResult;


    //add to the inner html of the results div
    results.appendChild(pTag);
    results.appendChild(pTagSub);
    results.appendChild(pTagProduct);
    results.appendChild(pTagQuotient);
    results.appendChild(pTagSumAll);
    results.appendChild(pTagFactorial);                        
}

//adds two numbers and returns the result
//let number1 = num1
function sumNumbers(number1, number2){
    let sum = number1 + number2;
    return sum; 
}

//subtract the entered values and display the result
function subNumbers(number1, number2){
    let sub = number1 - number2;
    return sub;
}

//multiply the entered values and display the result 
function multiplyNumbers(number1, number2){
    let product = number1 * number2;
    return product;
}

//divide the enter values and display the result
function divideNumbers(number1, number2){
    let quotient = number1 / number2;
    return quotient;
}

//modulus operator
// function remainder(number1, number2){
//     let remainder = number1 % number2
// }

//let startNumber = num1 (basically it is a substitution for num1 and num2 bc its a different scope)
function addAllNumbers(startNumber, endNumber){
    let sum = 0
    for (let i = startNumber; i<= endNumber; i++) {

    sum = sum + i;        

    }
    return sum;
}

//finds the *factorial* of the input numbers
function factorialNumbers(startNumber, endNumber){
    let product = 1
    for (let i = startNumber; i<= endNumber; i++) {
    
    product = product * i;
        
    }
    return product;
}
    




// function getValue2(){
//     let msg='';

//     msg=document.getElementById("message").value;

    
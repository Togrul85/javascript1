let salary = 1200;
let number= Number(prompt("First"));
let operator = prompt("Operator");


function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


function calculation(a,b,operator){
    switch(operator){
        case "+":
         console.log("collection",sum(a,b));
         break;

         case "-":
         console.log("ascention",sum(a,b));
         break;

         default:

         console.log("false")
        break;
    }
    
}

calculation(numberFirst,numberSecond,operator)
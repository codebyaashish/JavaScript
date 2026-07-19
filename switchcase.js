let a=prompt(`Enter number a:`);
let b=prompt(`Enter number b:`);
let slc=prompt(`Enter your operation`);

switch(slc){
    case '+':console.log(`Sum is ${a+b}`);
             break;
    case '-':console.log(`difference is ${a-b}`);
             break;
    case '*':console.log(`Prod is ${a*b}`);
             break;
    case '/':console.log(`quotient is ${a/b}`);
             break;
    case '**':console.log(`pow is ${a**b}`);
             break;
    case '%':console.log(`remainder is ${a%b}`);
             break;
    default:console.log("Wrong opertion entered");



    
}
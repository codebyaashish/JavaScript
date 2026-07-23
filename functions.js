function hello(){
   console.log("hello Aashish");
}


function sum(a,b){
    let sum=a+b;
    console.log(sum);
}

hello();
sum(2,8);


function prod(a,b){
    return a*b;
}

console.log(prod(2,5));


function aveFun(a,b,c){
    return (a+b+c)/3;
}

console.log(aveFun(3,6,6));



function tablefun(n){

    for(let i=1;i<=10;i++){
        console.log(`${n}*${i}=${n*i}`);
    }
}

tablefun(5);


//sum of n

function sumOfn(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log("sum is:",sumOfn(4));


//concat str

let arr=["Hi","hello","Good","Morning","Aashish"];

function concat(arr){
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
        
    }
    return str;
}

console.log("Sum of strings:",concat(arr));

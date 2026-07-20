let name="Aashish Vidyarthi";
console.log(name.length);//17
let fname="Ankit";
console.log("1st char of my name: ",fname[0]);
console.log("last char of my name: ",fname[fname.length-1]);
console.log("apnaCollege"+123);
console.log("".length , " ".length);

// Assignment 2

let months=["January","july","March","August"];
//july ,june ,march,aug

months.splice(0,2,"july","june");
console.log(months);

months.shift();
months.shift();
months.unshift("july","june");
console.log(months);




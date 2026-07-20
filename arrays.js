let arr=[23,34,56,"Aman","Anuj","neha"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Arrays mtds
//push,pop   shift,unshift


let cars=["Mbenz","Lambo","Fortuner","Toyota","Safari","Scorpio"];


console.log(cars.indexOf("Mbenz"));
console.log(cars.includes("Punch"));
console.log(cars.slice(2,5));//"Fortuner","Toyota","Safari"

console.log(cars);
console.log(cars.push("Punch"));
console.log(cars);
console.log(cars.pop());
console.log(cars);
console.log(cars.shift());
console.log(cars);
console.log(cars.unshift("RangeRover"));
console.log(cars);


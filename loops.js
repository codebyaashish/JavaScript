let nums=[22,44,55,66,77,88];

for(let i=0;i<nums.length;i++){
    console.log(nums[i],i);
}

//wap odd-even
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log("ODD" ,i);
    }else{
        console.log("EVEN" ,i);
    }
}

//wap table of n

let n=5;

for(let i=1;i<=10;i++){
    if(i==8){
        break;     
    }
    console.log(`${n}*${i}=${n*i}`);
}

//while loop

let x=1;

while(x<10){
  
    console.log(x);
    x++;
}


//nested for loop


let collec=[["Ironman","CaptainAmerica","Hulk","Spiderman","Vision"],
            ["wounderwomen","Neha","Shriti","Shruti","Sonali","Rashi","Osin"]];

for(list of collec){
    for(el of list){
        console.log(el);
    }

}
            for(let i=0;i<collec.length;i++){
                console.log("Outer loop",i);
                for(let j=0;j<collec[i].length;j++){
                    console.log(collec[i][j]);
                }
            }


for(char of "Aashish"){
    console.log(char);
}

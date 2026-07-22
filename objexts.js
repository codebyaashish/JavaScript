let student={
    name:"Rohit",
    age:23,
    marks:[65,88,45,99,76],
    city:"Bangalore"
}


student.name="Abhishek";
student["name"]="Ankit";

student.gender="Male";
console.log(student);



let students={
    Sakshi:{
        city:"Jaipur",
        age:23
    },

    Smriti:{
        city:"Patna",
        age:30
    },

    Aashish:{
        city:"Pune",
        age:28
    }
}

students.Aashish.city="Kolkata";

console.log(students);




let arrStudent=[{
    name:"Kavita",
    city:"Kolkata",
    marks:["34,55,667"]
},{
    name:"Aashish",
    city:"Bangalore",
    age:27
},{
    name:"neha",
    city:"Hubali",
    age:22
}];


console.log(arrStudent[2].name);

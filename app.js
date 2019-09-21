"use strict";

const x = 1;

var student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    height: 180,
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
}

student.age = 19;
student.age++;
const name = student.fullName();

console.log(student.age)
console.log(name)
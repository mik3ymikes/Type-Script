let age:number;

age=12

let userName:string

userName="Max"


let isInsturctor:boolean

isInsturctor=true

let hobbies:string[]

hobbies=["sports", "cooking"]


// let person:{
//     name:string;
//     age:number
// }

// person={
//     name:"Max",
//     age:32
// }

// person={
//     isEmployee:true
// }
//wont work cus wrong type

// let people:{
//     name:string;
//     age:number;

// }[];
// //means I want an object in an array

// people=[{
//     name:"mike",
//     age:45
// }]

//type inference by deafult it will questimate what is needed

// let course="react"

// //error here cuz it was a string then changed to numb
// course=1234


//may want to use more than one type tho...so use unions

let course:string | number="react is fun" //so now can use both

course=12324


type Person={
    name:string,
    age:number
}


///this an allias...can use them on multipe items
let person:Person

person={
    name:"max",
    age:43
}


let people:Person

people={
    name:"dad",
    age:343,
}

//function and types


//part outside the parenthisis is what value should be//should have to edo that tho
// function add(a:number, b:number):number{
//     return a +b
// }


//generics
//should lookinto it more? that thhe type put in should be the same?
function insertAtBegin<T>(array:T[], value:T){
    const newArray=[value,...array]
    return newArray
}

// const demoArray=[1,4,5]

// const updatedArray=insertAtBegin(demoArray,-1)

// class Student{
//     firstName:string;
//     lastName:string;
//     age:number;
//     private courses:string[]


//     constructor(first:string, last:string, age:number, courses:string[]){
//         this.firstName=first;
//         this.lastName=last;
//         this.age=age;
//         this.courses=courses
//     }

//     enrol(courseName:string){
//         this.courses.push(courseName)
//     }
//     listCourses(){
//         return this.courses.slice()
//     }
// }

// const student=new Student("max", "swan", 34, ["ang"])
// student.enrol("react")

// console.log(student.courses)



//interface objec type defs

//could use type too...interfaces could be used in classes?
interface Human{
    firstName:string;
    age:number;

    greet:() => void;
}

//can only follow structure set
// let max:Human;

// max={
// firstName:"max",
// age:32,
// greet() {
//     console.log("hi")
// },
// }

//or can use implements
// class Instructor implements Human{
//     firstName:"max";
// age:32;
// greet() {
//     console.log("hi")
// }
// }
// let arr=[1,2,3]; 
// arr.sayHello=() => {
//     console.log("hello!, this is arr")
// }; 

// arr.heyThisIs=()=>{ 
//     console.log("this is heyThisIs MeTHOD");

// } 
 


// function PersonMaker(name,age){ 
//     const person={
//         name:name,
//         age:age,  

//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     } 
//     return person;
// }  


//Constructor does't return anything & start with Capital Letter 


// function Person(name,age){ 
//     this.name=name; 
//     this.age=age; 
//     // console.log(this); 
// }   


// Person.prototype.talk=function() { 
//     console.log(`Hi, my name is ${this.name}`);
// } 


// let p1=new Person("adam",90); 
// let p2=new Person("ave",34); 

//Classes 
//Inherit  


class Person{ 
    constructor(name,age){ 
        this.name=name; 
        this.age=age;
    } 
    talk(){ 
        console.log(`hi,i am ${this.name}`);
    }
}
class student extends Person{ 
    constructor(name,age,marks){ 
     super(name,age);
        this.marks=marks;
    } 
}  



class Teacher{ 
    constructor(name,age,subject){  
        super(name,age);
        this.subject=subject; 
    } 
   
}

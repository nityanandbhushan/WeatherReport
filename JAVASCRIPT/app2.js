//--------------------------this keyword in javaScript----------------------------------- 
//Def....this keyword referce to the object.;.;.;.;.
// const student={ 
//     name:"shradha",
//     age:23,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){ 
//         let avg=(this.eng+this.math+this.phy)/3;
//         console.log(`${this.name} got avg marks=${avg}`); 
//             }
// } 
// console.log(student.getAvg()); 


//------------------try & catch----------------------------
// The  try statement allows you to define a block of code to be tested for errors while it is being executed. 
// try{ 
//     console.log(a);
// }catch{ 
//     console.log("a varible not define");
// } 

//--------------------------Miscellaneous Topic-----------------------------------
//----------Arrow Functions--
//const func=(arg1,arg2..)=>{ function definition } 
// const sum=(a,b)=>{ 
//     //console.log(a+b);
// } 
// sum(2,3); 
// const cube=(a)/*in single argument we hava the option of bracket, we can use the bracket or not*/=>{ 
    //console.log(a*a*a);
// } 
// cube(8); 

//---------Implicit return---------- 
// const func=(argu1,argu2)=>{ 
//     argu1+argu2 //implicit (itself) return means return the value automatic  without using return keyword
// }               //implicit return we use parenthesis not curly bracket
//expmpl 
// const mul=(a,b)=>(
//     a*b
// ) 
// console.log(mul(4,5)); 


//---------------------Set Timer------------------------- 
 
// console.log('HELLO BROTHER'); 
// setTimeout(()=>{ 
//     console.log("This is apna college");
// },4000) ; 
// console.log("welocme to"); 



//-------------------------------Set Interval-----------------------

//Set Timer print continously---------------------------------------
// 1sec=1000msec
// let id=setInterval(()=>{
//     console.log("Hy this is Apna college");
// },2000)

// console.log(id);
// //EveryInterval have a single id 


// let id2=setInterval(()=>{
//     console.log("Hy this is NityaNand Bhushan here");
// },2000) 

// console.log(id2);



//--------------------this with Arrow Functions-------------------------------
//if we have a lexical scope Arrow function then Arrow Function scope depend on  parent Arrow function will scope  as scope as parent 





//----------------------forEach----------------------- 
//Syntax:--  arr.forEach(some function definition or name);
//let arr=[1,2,3,4,5,6,7];
// (el)=>{ 
//     console.log(el);
// } 
// arr.forEach(fun); 


// arr.forEach(function(el){ 
//     console.log(el);
// }); 


// let fun=function(el){  
//     console.log(el);
// }
// arr.forEach(fun);
 


// arr.forEach((el)=>{ 
//     console.log(el);
// }); 
// let asgn=[
//     {
//         name:"kamil",
//         marks:12,
//         section:"A"
//     } ,

// { 
//     name:"akash ambani",
//     marks:123,
//     companyName:"APPLE"

//    }

// ];
    
// asgn.forEach(function(el){ 
//     console.log(el);
// }); 


//----------------------Map Function------------------------------
//Syntax= let variableName=arr.map((function name of body));

// let num=[1,2,3,4,5,6]; 
// let double=num.map((el)=>{ 
//     return el*el;
// });
// console.log(double); 
// let gpa=asgn.map((el)=>{ 
//     return el.marks/10;
// });
// console.log(gpa);


//------------------------Filter-------------------------------------
//let newArr=arr.filter(some function definiton or name);

// let nums=[2,4,1,5,6,2,7,8,9]; 
// let even=nums.filter((nums)=>(nums%2==0));
// console.log(even);



//---------------Every-----Some----------------------
//Returns true if every element of array gives true for some funcitons.Else retruns false.
//Syntax:----------arr.every(some function definition or name);
let ans=[1,2,3,4,5].every((el)=>(el%2==0));
console.log(ans); //output:false

let ans1=[10,2,30,4,50].every((el)=>(el%2==0));
console.log(ans1);

let ans2=[10,2,30,4,50].some((el)=>(el%2==0)); 
console.log(ans2);




//------------------------Reduce The Function----------------------

//Reduces the array to a single value

//Syntax:--arr.reduce(reducer function with 2 variables for(accumulator,element));


let arr=[1,2,3,4,5,6,7,8,9]; 
let finarr=arr.reduce((res,el)=>{  
    return res+el;
});
console.log(finarr);
//-----------------Finding the maximum value using reduce function or  method--------------------
let arr1=[1,2,3,4,5,6,7,8];
let maxValue=arr1.reduce((max,rel)=>{ 
    console.log(max);
    if(max<rel){
        return rel;
    }else { 
        return max; 

    } 
   
});
console.log("maximum value is"+maxValue);  

//-------------------------------Practice Question Paper--------------------------------------------------- 
//Question1:--Chceck if all numbers in our array are multiples of 10 or not? 
//Question1:--Create a function to find the min number in an array?
 

//Solution1:-- 
let array=[610,290,30,40,50,60,70]; 
let finVl=array.every((el)=>(el%10==0)); 
console.log(finVl);//output:---true 


//Solution2:--
let arry=[1,3,45,6,764,56,43,6]; 
let answer=arry.reduce((res,el)=>{ 
    if(res>el){ 
        return el; 

    }else{ 
        return res;
    }
}); 
console.log(answer); 

//default Parameter in JavaScript------------------------------------------------------------
//In Default Parameter we can set the default value of any variable in case we have not pass the argument compiler uses the defaual set value
function sumation(a,b=45){ 
    return a+b;
}  
console.log(sumation(3));//48
console.log(sumation(2,3));//5 

//---------------------Spread------------------------------- 
//Def:-Expands an iterable into multiple values---------- 
//Syntax:--function func(..arr){ //do something} 
//Example:- 
let arr2=[96,88,76,86,65,44,33,22,11]; 
console.log(Math.min(...arr2));//output:---11  
console.log(...arr2);//output:--96 88 76 86 65 44 33 22 11
let chars="hello"; 
console.log(...chars);//output:--h e l l o 
let odd=[1,3,5,7,9]; 
let even=[2,4,6,8,10]; 
let newArr=[...odd,...even];
console.log(...newArr);//output:--1 3 5 7 9 2 4 6 8 10

//Spread (object literal)-----------------------------------------------------

const data={
    name:"nityanand",
    roll:206301103,
    college:"gkv"
};  
const dataCopy={...data};
console.log(dataCopy);//output:-{name: 'nityanand', roll: 206301103, college: 'gkv'}
const dataCopy1={...data,id:12132};
console.log(dataCopy1);//output:---{name: 'nityanand', roll: 206301103, college: 'gkv', id: 12132}

//-----------------convert array into object literals-------------------------------
let ar=[12,3,4,4,5,6,6,77,8]; 
const vchar={...ar};
//--------------------In array present the all values inform of value but in the object literal we needs to key and value pair...
// both in case of array whenever we convert into array to object literal assign the index value inplace of key 
console.log(vchar);//{0: 12, 1: 3, 2: 4, 3: 4, 4: 5, 5: 6, 6: 6, 7: 77, 8: 8}



//--------------------Rest--------------------------------------
//Allows a function to take an indefinite number of arguments and bundle them in an array
//Syntax:--function sum(...args){ 
//  return args.reduce((add,el)=> add +el);
//}  
function fun(...args){  
    return args.reduce((res,el)=>{  
        return res+el;

    });
} 
console.log(fun(2,3,4,5,6,6,7,7,6,5,5,5,5,5,55,5));

//we can accept the other arguemnt with argument.....
function min(a,b,c,d){ 
    console.log(arguments);
}
min(2,3,45,6);



//---------------------------Destructing-----------------------------
//Storing values of array into multiply variables--
//Example:-- 
let names=["tony","bruce","steve","peter"]; 
let[winner1,runnerup1,other1]=names;
console.log(winner1,runnerup1,other1); //output:--tony bruce steve


let names1=["tony","bruce","steve","peter","langda","bahra"]; 
let[winner,runnerup,...other]=names1;
console.log(winner,runnerup,other); //output:--['steve', 'peter', 'langda', 'bahra']


//------------------------Destructing (Objects)-------------------------------

const student={ 
    name:"karan",
    class:9,
    age:14,
    subject:["hindi","english","math","science","socail studies"],
    username:"karan123",
    password:1234,
}; 
//suppose we need to store username or password in seperate place then we have a two method to seperate the value---------------------------------
//FirstMethod---------------------
let userN=student.username; 
let passW=student.password; 
//Second Methdo----------------Using Destructing------
//Syntax:--   const { username:user(value we want to store of data), password:pass(value we want to store of data)}=student;
const details={username:user,password:pass}=student;































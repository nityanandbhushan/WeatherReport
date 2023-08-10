//-------------------JS Objects Literals-----------------------------//
//Def:-Used to store keyed collections & complex entities. 
//property=>(key,value)pair 
//Obects are a collection of properties 

//-----------------------Creating Objects Literals------------------------
//ex:-
let delhi={ 
    latitude:"28.7041 N",longitude:"77.1025 E"
}; 
console.log(delhi); 

//ex:- 
const student ={ 
     name:"shradha",age:23,marks:94.4,city:"Delhi"
}; 
console.log(student);
// we can initialize the all data types in objects Literals 
 

//------------------------------Get Values From Objects----------------------------
student["name"]; // We can access the values from objects using . operand or square bracket
student.content; //


//-------------------Get Values----------------------------
//JS automatically converts objects keys to strings. 
//Even if we made the number as a key, the number will be converted to string.
 
//-----------------------Add / Update Value-----------In Objects Literals------------- 
//ex:- 
const student1 ={ 
    name:"shradha", 
    age:"23",
    marks:94.4, 
    city:"Delhi" 
};   
console.log(student1); //output:-{name: 'shradha', age: '23', marks: 94.4, city: 'Delhi'}
//-------------------------Change---------------------- 
student1.city="Mumbai";
student1.age=90;  
console.log(student1); //output:-{name: 'shradha', age: 90, marks: 94.4, city: 'Mumbai'}


//--------------------------Delete---------------------- 
 
//Syntax --------------Delete object_literals_name.KeyName;
delete student1.age; 
console.log(student1); //output:--{name: 'shradha', marks: 94.4, city: 'Mumbai'}


//------Nested Objects Literals---------We Can Initialize the object literals into the object literals 

const classInfo={ 
    aman:{city:"kanpur",grade:"A+"},
    gaurav:{city:"lucknow",grade:"A"},
    priyanshur:{grade:"O",city:"Allahabd"},
}; 
classInfo.aman;
console.log(classInfo.aman);//output:---{city: 'kanpur', grade: 'A+'} 
classInfo.aman.city;//we can use this chain concept in nested objects literals 
console.log(classInfo.aman.city);//output:--kanpur 


//------------Arrays of Objects------------ 
//Def:-Storing information of multiple students ; 
//exp- 
const classInformation=[ 
    { 
        name:"Aman",grade:"+A",city:"Delhi"
    }, 
    { 
        name:"Gaurav",grade:"A",city:"Pune"
    }, 
    { 
        name:"Karan",grade:"O",city:"Mumbai"
    }
]; 
console.log(classInformation[0]);//Output:--{name: 'Aman', grade: '+A', city: 'Delhi'} 
//-----------------------Change value---------------------------
classInformation[0].name="Rahul"; 
console.log(classInformation[0]);//Output:--{name: 'Rahul', grade: '+A', city: 'Delhi'} 
//--------------------------Add New value---------------------- 

classInformation[0].gender="male"; 
console.log(classInformation[0]); 




































//Solution of Given Question-------------------------------------------------------------------------
//First Solution-----------

function func(arr,val){ 
for(let i=0;i<arr.length;i++){  
if(arr[i]>val){  
    return arr[i];

}

}
} 
let arr=[1,2,3,4,5,6,7,8,12,13,14]; 
let val=6; 
console.log(func(arr,val)); 



//Second Solution--------- 
function getUnique(str){ 
    let ans=""; 
    for(let i=0;i<str.length;i++){ 
        let currChar=str[i]; 
        if(ans.indexOf(currChar)==-1){ 
         ans+=currChar;   
        }
    } 
    return ans;
} 
let str="abababddadge"; 
let strin=getUnique(str);
console.log(strin);
let str1="abcd"; 



//solution of 3 question  
function findLarg(country){
let max=0;
let va=-1;
for(let i=0;i<country.length;i++){ 
    let size=country[i].length;  
    if(size>max){ 
        max=size;
        va=i;
    } 
} 
return  va; 
} 
let country=["Australia","Germany","UnitedStatesofAmerica"];
console.log(country[findLarg(country)]);  
 

//solution of question 5 
let min=Math.random()*100;
console.log(Math.floor(Math.random()*100)+100); 



//LECTURE SIX-----------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------Functions-------In-----------JavaScripts=-------------------
function hello(){ 
    console.log("hello");
}  
hello();  

//------------------------------------------------------------------ 

//LEXICAL SCOPE:>> A VARIABLE DEFINED OUTSIDE A FUNCTION CAN BE ACCESSIBLE INSIDE ANOTHER FUNCTION DEFINED AFTER THE VARIABLE DECLARATION. 
//The opposite is NOT true 
//Lexical Scope define as nested function means function under fucntion
//ex:- 

function outerFunc()
{  
    let x=5; 
    let y=6; 
    function innerFunc()
    {  
        let a=10;
        console.log(x);
    }  
    console.log(a);
    innerFunc();

} 
//In this type of nested function nested scope will be from outer to inner
//EX:- For example if we innitializes any value in the inner function we can not acces from the outer function 





//----------------------------------------------Function Expression-------------------

//Function define  into the varibale if function hava function with argument then function argument pass by the function varibale not function 
const variable =function (a,b){ 
    let c=a+b; 
    console.log( a + "plus" + b + " = "+c);
}  
variable(2,3); 

const sum=function()
{ 
    console.log("NityNand Bhushan");
} 
sum(); 




//--------------------------------Higher Order Functions------------------------------
//Defi:-A Function that does one or both: 
// * Takes one or Multiple functions as arguments 
// * returns a function 
//Example  
function multipleGreet(func,count)
{  
    for(let i=0;i<count;i++)
    { 
        func();
    }

}

let greet=function()
{ 
    console.log("hello");
}  
multipleGreet(function() {console.log("Namaste")},20);   

//------------------------------Higher Function (Return)----------------------------
let odd=function(n){ 
    console.log(!(n%2==0));
} 
odd(9);
odd(8); 

//---------------------------Methods----------------------------- 
//Def:-Those function which is present in object literals thos function calls the method
//Example:- 
//

const calculator={ 
    add: function(a, b){ 
        return a+b;
    }, 
    sub:function(a,b){ 
        return a-b; 

    }, 
    mul: function(a,b){
        return a*b;
    }
}; 
console.log(calculator.add(5,4));






















// let num=2; 
// switch(num){ 
//     case 1: 
//         console.log("JANUARY","FEBRUARY","MARCH"); 
//         break;
//     case 2:
//         console.log("APRIL","MAY","JUNE"); 
//         break;
//     case 3:
//         console.log("JULY","AUGUST","SEPTEMBER"); 
//         break;
//     case 4: 
//         console.log("OCTOBER","NUMBER","DECEMBER"); 
//         break;
//     default:
//         console.log("Wrong Number");
// } 
// let str="golden string"; 
// if(str[0]=="a" || str[0]=="A" && str.length==5){ 
//     console.log("Golden");
// } 
// else{ 
//     console.log("Not Golden");
// } 
// let a=122; 
// let b=1345; 
// let c=144; 
// if(a>b && a>c){ 
//     console.log("A is greater than");
// } 
// else if(b>a && b>c){ 
//     console.log("B is greater than between three");
// } 
// else{ 
//     console.log("c is the greater than ");
// } 
// let num=47852;
// let num1=32; 
// if(num%10==num1%10){ 
//     console.log("Ture");
// } 
// else{ 
//     console.log("False");
    
// } 
/*  String Method */ 
// Trim Method 
// let msg="    Hello"; 
// console.log(msg.trim()); 
// let pass=prompt("Enter your password");
// alert(pass.trim());  

/// toUpperCase and toLowerCase method 
// let name="Nityanand Bhushan";
// console.log(name.toLowerCase());        


//indexOf method 
// let name="nitya nand bhushan"; 
// console.log(name.indexOf("nand")); //output:- 6 


//Method Chaining ----------------- str.length().str.trim().
// let varbl="      NityaNand  "; 
// console.log(varbl.trim()); 
// varbl=varbl.toUpperCase(); 
// console.log(varbl); 
// let value=" Bhushan    "; 
// console.log(value.trim().toUpperCase()); 


//----------------------Slicing-------------------------// 
// let msg="hello man this is how are you"; 
// console.log(msg.slice(5,9)); //passing single value treated as starting value and print start from end


//-----Replace Method---------------//   

// let name="BrijMohan";  
// console.log(name);//output:-BrijMohan
// console.log(name.replace("Brij","Mohan"));///output:--MohanMohan 

// //__------------------__----- Repeat_____-_-_-_----------__-__
// //Returns a string with the number of copies of  a string 
// console.log(name.repeat(3));//BrijMohanBrijMohanBrijMohan 
// let msg="      help!"; 


// console.log(msg.trim().toUpperCase());
// //----------------Arrays______________________// 
 
// let arr=['aman','shradha','rajat']; 

// //-------------------------Creating Arrays------------ 


// let marks=[99, 85, 93, 76, 62]; 
// let names=["adam","bob","catlyn"]; 
// let info=["aman",25,6.1];  // In javaScript we can store different type of data  
// console.log(info[0]);//output:----aman
// console.log(info[0][0]);//output:---a 
// let nam=log[0]//output:---aman 
// console.log(nam[0]);//output:---a  

// //---------------Arrays are Mutable---------------// 
 
// let arrs=["mango","apple","litchi","banana"]; 
// arrs[0]="grapes";  
// arrs[1]="Guava"; 
// //------------------Array Mehod--------------// 

// // Push:add to end  
// let cars=['audi','bms','xuv','maruti']; 
// cars.push("lombergini");


// // Unshift: add to start  
// cars.unshift("bukati");

// // Pop:delete form end & returns it  
// cars.pop();
// // Shift:delete from start & returns it 
// cars.shift(); 


// //----------------------------Array Method----------------------------
// //indexOf:returns index of something
// let primary=['red','yellow','blue'];  
// primary.indexOf('yellow'); //output:---------true 
// primary.indexOf("green");//output:-------------1 
// primary.indexOf('Yellow');//output:--------1 

// //includes:search of a value 
// primary.includes("red"); //output:----true 
// primary.includes("green");//output:----false 

// //-------------Concat Method--------------------- 
// let primary1   =['red','yellow','blue'];  
// let primary2=['orange','green','violet']; 
// primary1.concat(primary2);//output:---- [ 'red','yellow','blue','orange','green','violet' ] 

// // [ 'red','yellow','blue','orange','green','violet' ] 

// //sequence of value dependent on which value we take at first positon  

// primary2.concat(primary1);//output:---['orange','green','violet','red','yellow','blue'] 

// //['orange','green','violet','red','yellow','blue'] 

// //sequence of value dependent on which value we take at first positon 

// //--------*****concat method does not effect original array**********----------- 
 
// //-----------------------Reverse Method--------------------

// primary1.reverse();//output:------['blue',yellow','red']  

// //reverse method effects on the original array  

// //-----------------slice==>>>>>>Copies a portion of an array
// let colors=['red','yellow','blue','orange','pink','white'];  
// colors.slice() //output:-----give output as copy of original data
// colors.slice(2)   //output:---------print the value starting from given index value 
// //colors.slice() == colors.slice(starting index,ending index) 
// colors.slice(-2); //output::::::::pink , white
// // negative value give the output from ending   
// //--------------*****In slice only give output as copy ,all method effects on copy of original data not original data**********----------------------------




//---------------------Splice Method in Arrays____________________________________
//Def:--removes / replace / add elements in place   
//-----------------********** In splice method any changes of data do in original data 


//--------------------------------For Loop---------------------

// for(let i=1;i<=10;i++){ 
//     console.log(i);
// }

//output:
// app.js:179 2
// app.js:179 3
// app.js:179 4
// app.js:179 5
// app.js:179 6
// app.js:179 7
// app.js:179 8
// app.js:179 9
// app.js:179 10 

//--------------------Printing Odd Number-----------------

// for(let i=0;i<=15;i++){ 
//     if(i%2!=0){ 
//         console.log(i);
//     }
// }  


//--------------------Printing Even Number------------------------- 
// for(let i=0;i<=20;i++){ 
//     if(i%2==0){ 
//         console.log(i);
//     }
// } 

//---------------------Printing Mulitplication table------------------------ 
// for(let i=1;i<=10;i++){ 
//     console.log("5" + "*"+ i +"=" + 5*i);
// } 
// for(let i=5;i<=50;i+=5){ 
//     console.log(i);
// }  

//---------------Break Keyword----------------------- 
// for(let i=1;i<=10;i++){ 
//     console.log(i); 
//     if(i==5){ 
//         break;
//     }
// } 

//--------------------Loops With Arrays--------------------- 
// let fruits=["mango","apple","banana","litchi","orange"];
// for(let i=0;i<=fruits.length;i++){ 
//     console.log(fruits[i]);
// } 
 
let heroes=[["ironmain","spiderman","thor"],["superman","wonder woman","flash"]]; 
for(let i=0;i<=heroes.length;i++){ 
    for(let j=0;j<=heroes[i].length;j++){ 
        console.log(heroes[i][j]);
    }
}












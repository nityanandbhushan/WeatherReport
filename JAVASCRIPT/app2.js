//--------------------------this keyword in javaScript----------------------------------- 
//Def....this keyword referce to the object.;.;.;.;.
const student={ 
    name:"shradha",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){ 
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${avg}`); 
            }
} 
console.log(student.getAvg()); 


//------------------try & catch----------------------------
// The  try statement allows you to define a block of code to be tested for errors while it is being executed. 
try{ 
    console.log(a);
}catch{ 
    console.log("a varible not define");
}

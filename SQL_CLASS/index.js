const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');  

const express=require("express"); 
const app=express();  
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'Nity@..7651'
  });


//   let q="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?))";
// //   let user=["123","123_newuser","abc@gmail.com","abc"]; 
// let data=[]; 
// for(let i=1;i<100;i++){ 
//     data.push(getRandomUser());
// }

// try{ 
//     connection.query(q,[data],(err,result)=>{ 
//         if(err) throw err;
//         console.log(err);
//     })
// } catch(err){ 
//     console.log(err);
// }

// let  getRandomUser=()=> {
//     return [
//        faker.string.uuid(),
//        faker.internet.userName(),
//        faker.internet.email(),
//        faker.internet.password(),
//     ];
//   }  



  app.get("/",(req,res)=>{  
    let q=`SELECT count(*) FROM user`;
    try{ 
    connection.query(q,(err,result)=>{ 
        if(err) throw err;
        let data=result[0]["count(*)"];
        res.render("home.ejs",{data});

    });
} catch(err){ 
    console.log(err);
    res.send("some error in DB");
}
    
}); 

//SHOW  USERS  

app.get("/user",(req,res)=>{ 
    let q=`SELECT * FROM user`; 

    try{ 
    connection.query(q,(err,users)=>{ 
        if(err) throw err;
        console.log(err);
        res.render("showuser.ejs",{users});
    });

} catch(err){ 
    console.log(err);
    res.send("some error in db");
}
}); 


//Editing   

app.get("/user/:id/edit",(req,res)=>{ 
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    res.render("edit.ejs");


    try{ 
    connection.query(q,(err,result)=>{ 
        if(err) throw err;
        let user=result[0];
        res.render("edit.ejs",{user});
    })
} catch(err){ 
    console.log(err);
    res.send("some error in db");
}

});




  app.listen("8080",()=>{ 
    console.log("server is listening to port 8080");
  });
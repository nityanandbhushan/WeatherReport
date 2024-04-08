const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override"); 
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'my_app',
  password: 'Nity@..7651',
});

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      let raw = result[0][`count(*)`];
      res.render("home.ejs", { raw });
    }
  });
});

app.get("/show", (req, res) => {
  let q = "SELECT * FROM user";
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      let raw = result;
      res.render("show.ejs", { raw });
    }
  });
})



app.get("/show/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT id,username,email,password FROM user WHERE id='${id}' `;

  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      let raw = result;
      // console.log(raw);
      res.render("edit.ejs", { raw });
    }
  });

});

app.patch("/show/:id", (req, res) => {
  let { id } = req.params;
  let newUsername = req.body.username;
  let newPassword = req.body.password;
  
  let q = `SELECT * FROM user WHERE id='${id}'  `;
  connection.query(q, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      let raw = result;
      let oldPsw = raw[0].password;
      console.log(oldPsw);
      if (oldPsw === newPassword) {
        let q1 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q1, (err, result) => {
          if (err) {
            console.error("Error inserting data:", err);
          } else {
            res.redirect("/show");
          }
        });
      } else {
        res.send("Wrong Password");
      }
    }
  });
});  
app.get("/show/new",(req,res)=>{ 
  res.render("new.ejs");
}); 
app.post("/show",(req,res)=>{ 
  let id=uuidv4();
  let userName=req.body.username; 
  let newPassword=req.body.password;
  let newEmail=req.body.email;  
  console.log(id); 
  console.log(userName); 
  console.log(newEmail); 
  console.log(newPassword);
  let data=[id,userName,newEmail,newPassword]; 
  
console.log(data);
  let q="INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)"; 
  connection.query(q,data,(err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log(result);
      res.redirect("/show");
    }
  });
});  


app.delete("/show/:id/delete",(req,res)=>{ 
  let id=req.params; 
  console.log(id);
  let q1 = `DELETE FROM user WHERE id='${id}'`; 
  connection.query(q1, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log(result);
      res.redirect("/show"); 
      console.log("data deleted");
    }
  });  
});

let fakeData = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];
// for (let i = 0; i < 95; i++) {
//   data.push(fakeData());
// }
// console.log(fakeData());


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

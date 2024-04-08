const { render } = require("ejs");
const express = require("express");
const { copyFileSync } = require("fs");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');




app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, 'views'));
app.set("views engine", "ejs");

let posts = [
    {
        id: "1a",
        username: "nityanand",
        content: "Exptectation is the main cause of all problem in human life"
    },
    {
        id: "2a",
        username: "aman",
        content: "A happy face hide our pain in our heart"
    },
    {
        id: "3a",
        username: "gaurav",
        content: "Finding A Loyal Person in this world today is impossible bcz a single face hide the multiple face behinde itself"
    },
    {
        id: "4a",
        username: "priyanshu",
        content: "Do all thing that you can do for happiness "
    },
    {
        id: "5a",
        username: "mushahid",
        content: "Keep Finding something for itself in every step every efforts"
    }
];

app.get("/", (req, res) => {
    res.send("Request accepted very well");
});


app.get("/posts", (req, res) => {

    res.render("index.ejs", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content });
    res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let data = posts.find((p) => id === p.id);
    // console.log(data);
    res.render("show.ejs", { data });

});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let data = posts.find((p) => id === p.id);
    data.content = newContent;

    res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", { post });
});


app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;

    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");


});

app.listen(port, () => {
    console.log(`Listening on port${port}`);
});


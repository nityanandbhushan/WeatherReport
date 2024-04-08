const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync.js");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const joi = require('joi');
const { listingSchema } = require("./schema.js");
const Review = require("./models/review.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


//this url has used to connect database mongodb to node js
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res) => {
    res.send("server has started");
});

const validateListing = (req, res) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();

    }
}

//Index Route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));


//New Route 
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//Show Route 
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));


//Create Route
app.post("/listings", validateListing, wrapAsync(async (req, res) => {

    const newListing = new Listing(req.body.listing);

    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    if (!newListing.description) {
        throw new ExpressError(400, "Discription is missing");
    }
    if (!newListing.title) {
        throw new ExpressError(400, "title is missing");
    }
    if (!newListing.country) {
        throw new ExpressError(400, "country name is missing");
    }
    if (!newListing.location) {
        throw new ExpressError(400, "location is missing");
    }
    await newListing.save();
    res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//update Route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));


//Delete Route 
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

app.post("/listings/:id/reviews", async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

})









// app.get("/testingListing", async (req,res)=>{ 
//     let sampleListing =new Listing({ 
// title:"My New Villa",
// discription:"By the Beach",
// price:299983,
// location:"calangute, Goa",
// country:"India",
//     });
// await sampleListing.save(); 
// console.log("sample was save"); 
// res.send("successfu testing");
// });





app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", { message });
});
app.listen(8080, () => {
    console.log("server is listening on port 8080");
});
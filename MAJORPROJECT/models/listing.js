const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require('joi');

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    image: {

        filename: String,
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1694861651735-555e68428c72?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
        },
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    reviews:[ 
        { 
            type:Schema.Types.ObjectId,
            ref:"Review"
        },
    ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
require("dotenv").config();
const mongoose = require("mongoose");
const productData = require("../models/bakedgoods");
const ProductModel = require("../models/products");

const { DB_URI } = process.env;

mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((response) => {
        console.log("MongoDB connection successful");
    })
    .then((response) => {
        ProductModel.insertMany(productData)
            .then((insertResponse) => {
                console.log("Data seeding successful");
            })
            .catch((insertErr) => {
                console.log(insertErr);
            })
            .finally(() => {
                mongoose.disconnect();
            });
    })
    .catch((err) => {
        console.log(err);
    });

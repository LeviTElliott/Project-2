// import express
const express = require('express');
const methodOverride = require('method-override')
const productController = require('./controllers/products_controller')
const controllers = require('./controllers');
const { application } = require('express');
// create instance
const app = express();

//const facebook = require("./facebook/models/facebook");

// db connection
require('./config/db.connection')

// configure the app settings (used by app.listen)
const PORT = 4000;
app.set('view engine', 'ejs');
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(bp.json())

//Index
app.get("/facebook", (req,res) => {
    const context = {facebook:facebook}
    res.render("index.ejs", context);
    console.log(facebook)
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
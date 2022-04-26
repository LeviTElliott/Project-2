// import express
const express = require('express');
const methodOverride = require('method-override')
// const productController = require('./controllers/products_controller')
const controllers = require('./controllers')
// create instance
const app = express();


// db connection
require('./config/db.connection')

// configure the app settings (used by app.listen)
const PORT = 4000;


//app configs - app.set()
//app.set('view engine', 'ejs')

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { Database } = require('massive');
const { getUser } = require('./controllers/authController');
// LEAVE SPACE after the 'required' packages at the top so can differentiate from required packages and further code. 



const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnathorized: false}
}).then( db => {
    app.set("db", db)
    console.log('your db connected... Alright Alright Alright')
}).catch(err =>  console.log((err)`No Connection Compadre`));

// Endpoints Here: // 
    // Rules for Endpoints:
        // Can have as many Endpoints as you want BUT
        // WANT EACH ENDPOINT IS UNIQUE - it does something different than the others
        // OR Use same endpoints for mult requests


  // AUTH CONTROLLER endpoints
  app.post('/')  
app.post("/auth/regiter", authCtrl.register);  
app.post("/auth/login", authCtrl.login);
app.post("/auth/logout", authCtrl.logout);
app.get('/auth/user', authCtrl.getUser); //

 //Have to use a 'POST' or a 'PUT' request for Login and Register functionality - Because need to be able to send a body.

 //CANNOT SEND A BODY ON A GET REUQEST OR DELETE REQUEST WITH AXIOS - BECOMING industy standard to use post for login/register

 // The 'authController is referencing the module.exports of authController, below others are dong same thing:


  // # PRODUCT ENDPOINTS   //Usually will add/use an ' id ' tag with endpoints that involving adding and deleting products. 

    app.get("api/products");
    app.post("api/products");
    app.put("/api/products");
    app.delete("/api/products");



  // cart endpoints 

  app.get("api/cart");  // Retrieiving the Cart
  app.post("api/cart");  //When we POST something we won't likely need a 
  app.delete("api/cart");  //Will need a product id; usually will use an ' id ' to help desiginate which products you'll be deleting 

// Get from db API
// app.get('/')
// // Put contents on reactful DOM node for display
// app.put
// // post items to shopping cart
// app.post
// // delete items from cart
// app.delete() 


// Getting express running and listening on a port:

app.listen(SERVER_PORT, () => console.log(`Hey Hey, Your Server, Works Today ${SERVER_PORT}`));

require('dotenv').config();

const express = require('express');
const massive = require('massive');
const { Database } = require('massive');

const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnathorized: false}
}).then( db => {
    app.set("db", db)
    console.log('your db connected... Alright Alright Alright')
}).catch(err =>  console.log(err));

// Endpoints Here: //
// Get from db API
app.get
// Put contents on reactful DOM node for display
app.put
// post items to shopping cart
app.post
// delete items from cart
app.delete() 



app.listen(SERVER_PORT, () => console.log(`Hey Hey, Your Server, Works Today ${SERVER_PORT}`));
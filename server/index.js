require('dotenv').config()

const express = require('express')
const massive = require('massive')

const app = express()

app.use(express.json())
cons {CONNECTION}

const SERVER_PORT= 3993



app.listen(SERVER_PORT, () => console.log(`Hey Hey, Your Server, Works Today ${SERVER_PORT}`));
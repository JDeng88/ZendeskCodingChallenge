const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');


const API_URL = "https://zccjdeng88.zendesk.com/api/v2";
const API_USER = require("./user.js");

console.log(API_USER);

app.use(cors());

app.get('/', function(req, res){
    (async () => {
        try {
            const response = await axios({
               url: '/tickets.json',
               baseURL: API_URL,
               headers: {
                   "Content-Type": "application/json",
                   "Authorization": "Basic " + API_USER
               }
            })
            console.log(response);
            res.send("hello world");
        } catch (error){
            console.log(error);
        }
    })
})



app.listen(5000, () => {
    console.log("Listening on port 5000");
})

//TODO: fix api request. Working in postman but not in app

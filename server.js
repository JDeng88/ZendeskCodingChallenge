const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');


const API_URL = "https://zccjdeng88.zendesk.com/api/v2";
const API_USER = require("./user.js");

app.use(cors());

app.get('/', function(req, res){
    (async () => {
        try {
            console.log("tried");
            var response = await axios({
                url: "/tickets.json",
                baseURL: API_URL,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + API_USER
                    }
                })
            console.log(response.data.tickets);
            res.send(response.data.tickets);
        } catch (error){
            res.send(null);
        }
    })()
})



app.listen(5000, () => {
    console.log("Listening on port 5000");
})


const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');


const API_URL = "https://zccjdeng88.zendesk.com/api/v2";
const API_USER = require('./user');

// if (process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
//     app.get('*', (req, res)  => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     })
// }

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



export default app;
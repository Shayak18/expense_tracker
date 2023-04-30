const express = require('express')
const cors =require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const path = require('path');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT


app.use(express.json())
app.use(cors())


readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// app.use(express.static(path.join(__dirname, './frontend/build')))

// app.get("*", function(req,res){
//     res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
// });
app.get(
    "/",()=>{
        console.log("API running");
    }
)

const server = () => {
    db()
    app.listen(PORT, () => {
console.log('listening to port:', PORT);
})
}

server()
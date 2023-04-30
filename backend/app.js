const express = require('express')
const cors =require('cors');
const { db } = require('./db/db');
// const {readdirSync} = require('fs');
const path = require('path');
const app = express();
const routes = require('./routes/transactions')

require('dotenv').config()

const PORT = process.env.PORT


app.use(express.json())
app.use(cors())

app.use("/api/v1",routes)
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// app.use(express.static(path.join(__dirname, './frontend/build')))

// app.get("*", function(req,res){
//     res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
// });
app.get(
    "/",(req,res)=>{
        res.send("API running");
    }
)

const server = () => {
    db()
    app.listen(PORT, () => {
console.log('listening to port:', PORT);
})
}

server()
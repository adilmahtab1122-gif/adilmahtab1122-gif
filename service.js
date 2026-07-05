const express = require("express")
const PORT = 3000
const app = express()
const db = require('./db')
// 2. CHECK CONNECTION CONNECTION ON STARTUP
db.getConnection()
    .then(connection => {
        console.log('✅ MySQL Database connected successfully inside Codespaces!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Database connection failed:', err.message);
    });
app.get('/', (req,res)=>{
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log('something');
})
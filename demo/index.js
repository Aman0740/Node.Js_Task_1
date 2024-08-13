const express = require('express')
const students = require('./student')
const app = express();

app.use(express.json())

app.listen(4000,()=>{
    console.log("Server was run")
});

app.get('/', (req,res)=>{
    //res.send("<h1>HELLO WELCOME BACK</h1>")
    res.json({message : "API is working"})
});

app.get('/api/students', (req,res)=>{
    res.json(students)
})
app.post('/api/students', (req,res)=>{

    if (!req.body.email) {
        res.status(400)
        return res.json({Error : "API is not working"})
    }

    const user ={
        id : students.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender,
        ip_address : req.body.ip_address
    }
    
    students.push(user)
    res.json(user)
})
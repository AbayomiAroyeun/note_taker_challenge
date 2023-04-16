const express = require('express');
const path = require('path')
const app = express();
const PORT = 5001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/notes", (req, res)=>{
res.sendFile(path.join(process.cwd(),"./public/notes.html" ))
})

//app.get("/profile", (req, res)=>{
//res.json({"profile": "hello"})
//})


app.listen(PORT, ()=>{
    console.log("port is running on http://localhost:"+PORT)
})
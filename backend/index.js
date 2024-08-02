const express = require("express")
const route = require("./Routing/Route");
const { default: mongoose } = require("mongoose");
const app =express()
const cors =require('cors')
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
mongoose.connect("mongodb://localhost:27017/service").then(()=>{console.log("DB connected")})
route(app)

app.get('/test', function(req, res){
    res.send("Hello world!");
 });
 
 app.listen(4000);
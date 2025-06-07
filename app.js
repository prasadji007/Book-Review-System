import express from express;


const express=require('express');
const app=express();


app.use(express.json());


app.get('/',(req,res)=>{
    res.send("page loaded");
})

app.listen(3000,console.log("server started"))
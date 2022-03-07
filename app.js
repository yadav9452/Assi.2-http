const express=require("express");
const app=express();

app.get("/home", (req,res)=>{
    res.send("Hello");
});

app.get("/books", (req,res)=>{
    res.json([{"The Kite Runner":"Kahlid Hossaini"},{"Ikkigai":"Kaira Mikki"},{"The Intelligent Investor":"Graham bell"},{"Learn To Earn":"Peter Lynch"}]);
});

app.listen("4500",()=>{
    console.log("Listening on Port 4500");
})
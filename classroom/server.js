const express = require ("express");
const app = express();

app.get("/", (req,  res) => {
    res.send("hi, i am root!");
});

//Index - users
app.listen(1000, () => {
    console.log("server is listing to 1000");
    
});
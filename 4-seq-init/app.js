const express=require("express");
const syncDatabase = require("./models");
require("dotenv").config();
const app=express();


const PORT=process.env.PORT ||4000
syncDatabase().then(()=>{

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);

});
})
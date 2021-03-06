const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const userRoutes = require("./Routes/userRoutes");
const taskRoutes = require("./Routes/taskRoutes");
const{ protectRoute} = require("./middlewares/protectRoute");

app.use("/users", userRoutes);
app.use("/todolist", protectRoute ,taskRoutes);

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true , useNewUrlParser: true },(err, connection)=>{
    if(err){
        console.log(err);
    }
    console.log("Successfully connected to the database");       
})

app.listen(4000, ()=>{
    console.log("Listening to the port 3000");
})

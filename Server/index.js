const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();

//Importing Routes
const signUpRoute = require('./routes/SignUp')
const logInRoute = require('./routes/logIn') 

//Middelware 
app.use(express.json())
app.use(morgan("dev"))
app.use(cors("*"))

//Route 
app.use("/signUp", signUpRoute)
app.use("/logIn", logInRoute)


//Database connection
connectDb = async () => {
    try {
      await mongoose.connect("mongodb+srv://test:test@cluster0.otjixia.mongodb.net/ChallangeMern", { //change it
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db connected")
    } catch (error) {
      console.log("Failled connection" + error.message)
    }
}

app.listen(8000, () => {
    connectDb()
    console.log("listening on port 8000 !");
});

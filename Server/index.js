
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();

//Importing Routes
const signUpRoute = require('./routes/SignUp')
const logInRoute = require('./routes/logIn')
const productsDetailsRoute = require('./routes/ProductsDetails') 
const editRouter = require("./routes/editProfile")
const productsRoute = require('./routes/Products')
const ContactRouter = require("./routes/contact")
const ordersRouter = require('./routes/orders')


//Middelware 
app.use(express.json())
app.use(morgan("dev"))
app.use(cors("*"))

//Routes definition 
app.use("/signUp", signUpRoute)
app.use("/logIn", logInRoute)
app.use("/products", productsRoute)
app.use("/products/detail", productsDetailsRoute)
app.use("/edit", editRouter)
app.use("/contact",ContactRouter)
app.use("/orders", ordersRouter)


//Database connection
connectDb = async () => {
    try {
      await mongoose.connect("Add your Mongo DB Url", {
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


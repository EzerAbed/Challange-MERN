const express = require("express");
const morgan = require("morgan");
const ContactRouter = require("./routes/contact")
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();


//definition des middlewares
app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))
app.use("/contact",ContactRouter)

connectDb = async () => {
    try {
      await mongoose.connect("mongodb+srv://mohamedelayech:mohamedd123@mohamed.dak6caa.mongodb.net/", { //change it
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      })
      console.log("db connected")
    } catch (error) {
      console.log("Failled connection" + error.message)
    }
}


app.listen(8000, () => {
    connectDb()
    console.log("listening on port 8000 ! ");
  });
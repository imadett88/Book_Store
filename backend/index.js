const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors")
const app = express();
//les routes
const catRoutes = require("./routes/categoryRoutes")
const bookRoutes = require("./routes/bookRoutes")
const userRoutes=require("./routes/user.Route")
const {json} = require("express");

app.use(cors())
app.use(express.json())
app.use("/categories",catRoutes)
app.use("/books",bookRoutes)
app.use("/users",userRoutes)


require("dotenv").config()



//mongoose.set('strictQuery', false);


mongoose.connect(process.env.MONGO_URL).then(result=>
    app.listen(process.env.PORT, () => {
      console.log("server is running ...")
    })
  ).catch((error) => console.log(error));

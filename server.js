const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controlers = require("./controlers")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false  
});
app.use(controlers);


app.listen(PORT, () => {
    console.log(`NOW LISTENING TO PORT http://localhost:${PORT}`);
})
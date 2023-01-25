const express = require("express");
const app = express();

const mongoose = require("mongodb+srv://johnloccck:freedomischoice@smiple-login-project.qf3pzta.mongodb.net/?retryWrites=true&w=majority")

mongoose.connect()

//Api requesti koji spajaju sa backendom

app.listen(3001, () => {
    console.log("SERVER RUN PERFECTLY")
});

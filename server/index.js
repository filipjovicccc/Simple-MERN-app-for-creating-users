const express = require("express");
const app = express();

const mongoose = require("mongodb+srv://johnloccck:freedomischoice@smiple-login-project.qf3pzta.mongodb.net/?retryWrites=true&w=majority");
const UserModel = require("./models/Users");


const UserModal = require("./models/Users")

const cors = require("cors")

app.use(express.json());
app.use(cors())

mongoose.connect()

app.get("/getUsers", (req, res) => {
    UserModel.find({},(err, result)=> {
            if(err){
                res.json(err)
            }else {
                res.json(result)
            }
    } )

})

//Api requesti koji spajaju sa backendom

app.post("/createUser", async(req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)

})

app.listen(3001, () => {
    console.log("SERVER RUN PERFECTLY")
});

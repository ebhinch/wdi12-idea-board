const express = require("express")
const router = express.Router()
//bring in models created in Schema.js file
const { UserModel } = require("../db/schema")

//use async/await instead of .then .catch promises
router.get("/", async (request, response) => {
    try{
    const users = await UserModel.find({})
    //will send back json
    response.json(users)
    }
    catch (error) {
        response.send(error)
    }
})


module.exports = router

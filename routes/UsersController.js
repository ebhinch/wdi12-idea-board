const express = require("express")
const router = express.Router()
//bring in models created in Schema.js file
const { UserModel } = require("../db/schema")

//use async/await instead of .then .catch promises
router.get("/", async (request, response) => {
    try {
        const users = await UserModel.find({})
        //will send back json
        response.json(users)
    }
    catch (error) {
        response.send(error)
    }
})

router.get("/:id", async (request, response) => {
    try {
        const user = await UserModel.findById(request.params.id)
        //will send back json
        response.json(user)
    }
    catch (error) {
        response.send(error)
    }
})

router.post("/", async (request, response) => {
    try {
    //create new instance of user
    const newUser = new UserModel(request.body.user)
    //then save
    const saved = await newUser.save()
    response.json(saved)
    }
    catch (error) {
        response.send(error)
    }
}

)

module.exports = router

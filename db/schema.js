const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define idea schema
const IdeaSchema = new Schema({
    title: {
        type: String,
        default: "New Title"
    },
    description: {
        type: String,
        default: "New Description"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//define user schema
const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    ideas: [IdeaSchema]
})

//create models based on each schema
const IdeaModel = mongoose.model("Idea", IdeaSchema);
const UserModel = mongoose.model("User", UserSchema);

//export each model so they can be required elsewhere
module.exports = {
    IdeaModel: IdeaModel,
    UserModel: UserModel
}
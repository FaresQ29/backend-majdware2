const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Model = mongoose.model

const userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    factories: [{type: Schema.Types.ObjectId, ref: "Factory"}],
    codes: [{
        code: String,
        codeVal: String
    }]
})


const User = Model("User", userSchema)

module.exports = User
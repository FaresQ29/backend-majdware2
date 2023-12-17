const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Model = mongoose.model

const factorySchema = new Schema({
    factoryName: String,
    factoryUser: {type: Schema.Types.ObjectId, ref: "User"},
    entries: [
        {
            data: Date,
            desig: String,
            credito: String,
            debito: String,
        }
    ]

})


const Factory = Model("Factory", factorySchema)

module.exports = Factory
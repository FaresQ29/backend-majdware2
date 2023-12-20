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
            timestamp: Number,
            desigCode: {type: String, default: ""}
        }
    ]

})


const Factory = Model("Factory", factorySchema)

module.exports = Factory
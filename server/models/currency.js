const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  coastInRubbles: { type: Number, required: true }
})

module.exports = model('currency', schema)

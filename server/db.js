/* eslint-disable no-console */
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose
  .connect(process.env.dbURL || 'mongodb://localhost:27017/meter', {
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to database.'))
  .catch(() => {
    console.log('Cannot connect to database. Exiting.')
    process.exit()
  })

const { Schema } = mongoose
const currencySchema = new Schema({
  name: String,
  coastInRubbles: Number
})

const currency = mongoose.model('currency', currencySchema)

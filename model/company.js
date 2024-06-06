
const mongoose = require('mongoose')
const companySchema = mongoose.Schema({
// 
    company_name: {
        type: String,
        required: true
    },
    company_location: {
        type: String,
        required: true
    },
    lattitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('company', companySchema)
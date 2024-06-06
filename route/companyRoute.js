
const {getCompany,postCompany,putCompany,deleteCompany} = require('../controller/companyController')

const Route = require('express').Router()

//Requests
Route.get('/', getCompany)
Route.post('/', postCompany)
Route.put('/:id', putCompany)
Route.delete('/:id', deleteCompany)

module.exports = Route
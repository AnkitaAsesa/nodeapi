
const companyRoute = require('./route/companyRoute')
// const userRoute = require('./Route/userRoute')

require('dotenv/config')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('This is app')
})

app.use('/api/company',companyRoute)
// app.use('/api/user', userRoute)

app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    const data = await res.default
    console.log(data.STATES['1'])
}
main()
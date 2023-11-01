require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const {PORT = 3000} = process.env

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res)=>{
    return res.json({
        status: true,
        message: 'hii develop',
        err:null,
        data: null
    })
})

const user = require('./routes/user.routes')
const profile = require('./routes/profile.routes')

app.use('/api/v1/users', user)
app.use('/api/v1/profiles', profile)

app.listen(PORT, () => console.log("app listening on port : ", PORT))
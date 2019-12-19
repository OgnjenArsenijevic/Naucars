console.log('hello')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config= require('./config/config')

const app = express()
const history = require('connect-history-api-fallback')
const path = require('path');
const vuepublic = express.static(path.join(__dirname, 'dist'));

app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(vuepublic)
app.use(history())
app.use(vuepublic);

require('./routes')(app)

sequelize.sync().then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})

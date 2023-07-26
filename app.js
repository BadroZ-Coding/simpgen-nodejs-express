const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { port } = require('./src/config.json')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))

/** write 
 * code 
 * here
 */

app.listen(port, () => {
    console.log(`Server listener on the port ${port}`)
})
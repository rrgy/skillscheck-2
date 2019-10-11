require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Boop Beep')
})

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.postProduct)
app.delete('/api/product/:index', ctrl.delete)

app.listen(SERVER_PORT, () => console.log('Beep Boop'))
const express = require('express')
const app = express()
const port = 9000

app.get('/api', (req, res) => {
    res.send('API')
})

app.listen(port, () => {
    console.log('server listening at port:' + port)
})
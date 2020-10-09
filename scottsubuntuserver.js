const express = require('express')
const app = express()
const cors = require('cors')
const port = 9000

app.use(cors())

app.get('/api', (req, res) => {
    res.send('API')
})

app.listen(port, () => {
    console.log('server listening at port:' + port)
})
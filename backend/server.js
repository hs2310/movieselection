const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/list',(req,res) => {
    console.log(req.body.movie)
    res.send(req.body.movie + ' got !!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
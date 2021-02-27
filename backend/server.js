const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World, Hello Backend!')
})

app.post('/', (req, res) => {
  console.log(req.body);
})

app.post('/register', (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`)
})
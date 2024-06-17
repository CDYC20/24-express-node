/*
const express = require('express')
const router = express.Router();
const app = express()
const port = 3000

router.get("/", function (req, res) {
    res.send("Wiki home page");
});
    
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
  */
const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.send('Hello Express')
});
app.listen(process.env.PORT || 3000)
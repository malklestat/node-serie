const express = require('express');
const bodyParser = require ('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false} ));

require('./controllers/authController')(app);

app.get('/', (req, res) => {

  res.send("ok")
});

app.listen(3000);

console.log("Rodando na porta 3000");



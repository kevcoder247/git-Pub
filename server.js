const express = require('express');
const app = express();
const PORT = 3000;
const drinks = require('./models/drinks');


console.log(drinks[0].name)

//Index
app.get('/drinks/', (req, res) => {
  res.render('drinks_index.ejs', {drinks});
})


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
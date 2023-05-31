const express = require('express');
const app = express();
const PORT = 3000;
const drinks = require('./models/drinks');




//Index Route
app.get('/drinks/', (req, res) => {
  res.render('drinks_index.ejs', {drinks});
});


//Show Route
app.get('/drinks/:id', (req, res) => {
  res.render('drinks_show.ejs', {
    drinks: drinks[req.params.id]
  })
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})



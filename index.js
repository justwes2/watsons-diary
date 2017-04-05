
const express = require("express");
const parser = require('body-parser');

//api key extractor
const dotenv = require('dotenv').config()

var jsdom = require("jsdom");

//watson api dependencies
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': process.env.DB_USER,
  'password': process.env.DB_PASS,
  'version_date': '2017-02-27'
});

const app = express();



app.use("/assets", express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory
app.use(parser.json({extended: true}) )

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get("/text", (req, res) => {
  const parameters = {
    'text': req.query.text,
    'features': {
      'keywords': {
        'emotion': true,
        'sentiment': false,
        'limit': 5
      }
    }
  }

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
      console.log('error:', err);
    else
      res.json(response);
  });
})


app.listen(4000, () => {
  console.log("Port 4000 open");
});

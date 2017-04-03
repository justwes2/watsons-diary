
const express = require("express");
const parser = require('body-parser');
//api key extractor
const dotenv = require('dotenv').config()

var jsdom = require("jsdom");
// var window = jsdom.jsdom().defaultView;

// var jsdom = require("jsdom");
// $ = require("jquery")(jsdom.jsdom().createWindow());
// jsdom.jQueryify(window, "http://code.jquery.com/jquery.js", function () {
//   var $ = window.$;
//   $("body").prepend("<h1>The title</h1>");
//   console.log($("h1").html());
// });

// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
// import {$,jQuery} from 'jquery';
// const jQuery = require('jquery');
// const $ = require('jquery');
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;


//watson api dependencies
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': process.env.DB_USER,
  'password': process.env.DB_PASS,
  'version_date': '2017-02-27'
});

const app = express();

// app.set("view engine", "hbs");

app.use("/assets", express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory
app.use(parser.json({extended: true}) )

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});


// app.get("/text", (req, res) => {
//   console.log(req.query);
//   const parameters = {
//     'text': req.query.text,
//     'features': {
//       'emotion': {
//         'targets': [
//           'feminism',
//           'Black Lives Matter'
//         ]
//       }
//     }
//   }
app.get("/text", (req, res) => {
  // console.log(req.query);
  const parameters = {
    'text': req.query.text,
    'features': {
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 1
      },
      'keywords': {
        'emotion': true,
        'sentiment': true,
        'limit': 5
      }
    }
  }

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err)
      console.log('error:', err);
    else
      // var metrics = JSON.stringify(response, null, 2)
      //couldn't do let or const
      res.json(response);
      console.log(response);
  });
})


app.listen(4000, () => {
  // console.log("app listening on port " + this.address().port)
  console.log("Port 4000 open");
});

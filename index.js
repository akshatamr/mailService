"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
 
var mailer   = require("mailer")
  , username = "apikey"
  , password = "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";
  
  mailer.send(
  { host:           "smtp.sendgrid.net"
  , port:           25
  , to:             "autodroid2018@gmail.com"
  , from:           "automataaug2018@gmail.com"
  , subject:        "Green Test"
  , body:           "Hello from eGreen!"
  , authentication: "login"
  , username:       username
  , password:       password
  });

  
  return res.json({
   fulfillmentText: "eGreen Test Success"
   
  });
});

function myData() { 
   chatResponse=chatResponse+"hello";
} 

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

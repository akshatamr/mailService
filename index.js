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
  , username = "automataaug2018@gmail.com"
  , password = "Auto@2018";
  
  mailer.send(
  { host:           "smtp.mandrillapp.com"
  , port:           587
  , to:             "autodroid2018@gmail.com"
  , from:           "automataaug2018@gmail.com"
  , subject:        "Green Test"
  , body:           "Hello from eGreen!"
  , authentication: "login"
  , username:       username
  , password:       password
  }, function(err, result){
    if(err){
      console.log(err);
    }
  }
);
  
  return res.json({
   fulfillmentText: "eGreen Test Success"
   
  });
});

function myData() { 
   chatResponse=chatResponse+"hello";
} 

restService.listen(process.env.PORT || 587, function() {
  console.log("Server up and listening");
});

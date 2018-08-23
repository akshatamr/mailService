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
 
var action = req.body.queryResult.action;
var chatResponse = "";
      
var jsonFile = require('jsonfile')
var fileName = 'airline.json'

jsonFile.readFile(fileName, function(err, jsonData) {
  if (err) throw err;
  for (var i = 0; i < jsonData.length; ++i) {

  chatResponse = jsonData[i].name;
  //console.log("Emp Name: "+jsonData[i].place);
  }
});
 
var mailer   = require("mailer")
  , username = "automataaug2018@gmail.com"
  , password = "Auto@2018";
  
  mailer.send(
  { host:           "smtp.mandrillapp.com"
  , port:           25
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
    //fulfillmentText: chatResponse
    fulfillmentText: "test"
    /*text: x
    departingCity: departCity,
    arrivalCity: arrivalCity,
    startDate: startDate,
    endDate: endDate*/
   
  });
});

restService.listen(process.env.PORT || 25, function() {
  console.log("Server up and listening");
});

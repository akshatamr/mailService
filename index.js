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

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

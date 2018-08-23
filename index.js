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
 
// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
var sendgrid = require("sendgrid")("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");
var email = new sendgrid.Email();
email.addTo("autodroid2018@gmail.com");
email.setFrom("automataaug2018@gmail.com");
email.setSubject("Sending eCertificate");
email.setHtml("Hello from eGreen!");
sendgrid.send(email);
  
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

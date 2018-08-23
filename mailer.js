"use strict";

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

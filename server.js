const { response } = require("express");
var express = require("express");
var app = express();
var path = require("path");

app.get('/',function(req,res){
      res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.listen(8090);
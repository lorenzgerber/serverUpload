#!/usr/bin/env nodejs

// How to upload Files using Curl
// curl -k -X POST -F "sampleFile=@test.txt" "http://localhost:8000/upload"


const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


// make a random filename
function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;


  var makeName = makeId();
  makeName = './' + makeName + '.txt';


  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(makeName, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});



app.listen(8000, function() {
  console.log('Express server listening on port 8000'); // eslint-disable-line
});


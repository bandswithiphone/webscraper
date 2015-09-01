var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var groupUrls = [];


request('http://substack.net/images/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('td:first-child').each(function(i, element){
      var rw = $(this).text();
      console.log(rw);
    });
    
    $('td:nth-child(3)').each(function(i, element){
      var url = $(this).text();
      groupUrls.push(url);
    });

    for (var x=0; x<groupUrls.length; x++){
      var fileSplit = groupUrls[x].split(".");
      var fileName = fileSplit[0];
      var extension = fileSplit[1];
          console.log(fileName + "." + extension);
          console.log(extension);
    }
    
 } 

});


// The columns should be:

// File Permission(code>(-rw-r--r--)</code>)
// Absolute URL(<a href="/images/binary-stream.png">)
// File Type (file extension?)
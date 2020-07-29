var fs = require('fs');
//using appendFile function to append text
fs.appendFile('mywfile.txt', '\nappend text to existing file', function (err) {
  if (err) throw err;
// Console will print the message  
  console.log('File Updated!');
});
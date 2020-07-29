var fs = require('fs');
//using unlink function to delete file
fs.unlink('mynewfile.txt', function (err) {
  if (err) throw err;
// Console will print the message 
  console.log('File deleted!');
});